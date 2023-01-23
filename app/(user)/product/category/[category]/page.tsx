import { groq } from "next-sanity";
import Store from "../../../../../components/Store";
import { client } from "../../../../../lib/sanity.client";
type Props = {
  params: {
    category: string;
  };
};

export const revalidate = 30; // revalidate this page every 30 seconds

export async function generateStaticParams() {
  const query = groq`
		*[_type == "product"]
		{
			category->{name}
		}
		`;

  const categories: Product[] = await client.fetch(query);

  const categoryRoutes = categories.map((category) => category.category.name);

  return categoryRoutes.map((category) => ({
    category,
  }));
}

async function Product({ params: { category } }: Props) {
  const query = groq`
		*[_type == "product" && category->name == $category]{
      ...,
      name,
      category->{name},
      brand->,
      origin->,
      colors[]->
    }
	`;

  const products: Product[] = await client.fetch(query, { category });

  return (
    <section className="text-gray-400 body-font text-center">
      <div className="container px-5 mx-auto">
        <h2 className="text-center text-xl font-bold sm:text-3xl mt-10 text-[#b4a07c]">
          {category}
        </h2>

        <Store products={products} />
      </div>
    </section>
  );
}

export default Product;
