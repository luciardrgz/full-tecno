type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Slug {
  _type: "slug";
  current: string;
}

interface Reference {
  _ref: string;
  _type: "reference";
}

interface Image {
  _type: "image";
  asset: Reference;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Product extends Base {
  name: string;
  slug: Slug;
  brand: Brand;
  category: Category;
  compatibility: Product[];
  info: Block[];
  weight: number;
  dimensions: string;
  origin: Origin;
  colors: Color[];
  images: Image[];
  price: number;
  stock: boolean;
}

interface Category extends Base {
  name: string;
  description: string;
}

interface Brand extends Base {
  name: string;
  origin: string;
  image: Image;
  slug: Slug;
}

interface Origin extends Base {
  name: string;
  slug: Slug;
}

interface Color extends Base {
  name: string;
  image: Image;
}
