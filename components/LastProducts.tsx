"use client";
import { groq } from "next-sanity";
import { useState, useEffect } from "react";
import { client } from "../lib/sanity.client";
import urlFor from "../lib/urlFor";
import Image from "next/image";
import noImg from "../img/no-img.png";

function LastProducts() {
  const [lastProducts, setLastProducts] = useState<Product[]>();

  async function retrieveLastProducts() {
    const query = groq`
            *[_type == "product"][0..3] {
              name,
              price,
              category->,
              images[],
              slug
            } | order((_createdAt) desc)`;

    const lastProducts: Product[] = await client.fetch(query);
    setLastProducts(lastProducts);
  }

  useEffect(() => {
    retrieveLastProducts();
  }, []);

  return (
    <div>
      {lastProducts && lastProducts.length > 0 ? (
        <div className="mt-2 sm:py-8 lg:py-12">
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <div className="mb-10 md:mb-16">
              <h2 className="text-[#b4a07c] text-lg md:text-2xl lg:text-3xl font-bold text-center">
                Nuestras novedades
              </h2>

              {/*Desktop*/}
              <p className="max-w-screen-md text-base justify-center text-white font-semibold md:text-lg hidden md:block text-center mx-auto mt-2">
                Los últimos productos que ingresaron. Clickeá cualquiera para
                más detalles:
              </p>

              {/*Mobile*/}
              <p className="max-w-screen-md text-small justify-center text-white font-semibold md:text-lg md:hidden text-center mx-auto">
                Los últimos productos que ingresaron. <br />
                Clickeá cualquiera para más detalles:
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {lastProducts.map((product) => (
                <div key={product.slug.current}>
                  {product.slug.current && (
                    <>
                      <a
                        href={`product/slug/${product.slug.current}`}
                        className="group h-48 md:h-80 flex items-end bg-[#1a1a1a] overflow-hidden rounded-lg shadow-lg relative hover:no-underline hover:text-[#b4a07c] rounded-t-lg"
                      >
                        {product.images && product.images.length > 0 ? (
                          product.images.slice(0, 1).map((image) => (
                            <div key={product.slug.current}>
                              <img
                                src={urlFor(image).url()}
                                loading="eager"
                                alt={product.name}
                                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                              />
                            </div>
                          ))
                        ) : (
                          <Image
                            src={noImg}
                            loading="eager"
                            priority={true}
                            alt={product.name}
                            className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                          ></Image>
                        )}
                      </a>

                      <div className="flex justify-between items-start bg-[#0d0d0d] rounded-b-lg gap-2 p-4">
                        <div className="flex flex-col w-full">
                          <a
                            href={`product/slug/${product.slug.current}`}
                            className="text-[#574f3d] hover:text-[#b4a07c] hover:no-underline lg:text-lg font-bold transition duration-100"
                          >
                            {product.name.length > 20
                              ? `${product.name.substring(0, 15)}...`
                              : product.name}
                          </a>

                          <a
                            href={`product/category/${product.category.name}`}
                            className="text-[#434242] hover:text-[#b4a07c] w-200 hover:no-underline text-sm md:text-base lg:text-base"
                          >
                            {product.category.name}
                          </a>
                          <div className="flex flex-col items-end">
                            <span className="text-[#434242] lg:text-lg font-bold">
                              ${product.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default LastProducts;
