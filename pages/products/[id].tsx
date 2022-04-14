/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import NavBar from "../../components/Layout/navbar";
import products, { Product } from "../../lib/data/products";
import Layout from "../../components/Layout";

// Custom button for this page
const Button = ({ children, className, ...props }: any) => (
  <button
    className={
      "rounded-lg p-2 box-content text-xs text-slate-600 min-w-[25%] bg-rose-500 hover:bg-rose-600 hover:text-rose-50 " +
      className
    }
    {...props}
  >
    {children}
  </button>
);

export default function ProductPage({ imgsrc, title, price, stock, id }: Product) {
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const [selectedSize, setSelectedSize] = React.useState(sizes[0]);

  return (
    <Layout>
      <div className="flex flex-wrap w-[90%] mt-24 mx-auto max-w-4xl border-2 justify-start p-8 gap-y-6">
        <img className="object-contain w-full sm:w-1/2" src={imgsrc} alt={title} />
        <div className="w-full sm:w-1/2 flex flex-col gap-y-6 px-4">
          <div>
            <p>{title}</p>
            <p className="text-lg text-rose-500">₱{price}</p>
          </div>
          <div className="after:content-['pc(s)'] after:position:absolute after:text-black after:inline-block after:ml-2">
            <p>Quantity</p>
            <input
              className="w-12 border-2 px-2 py-1"
              type="number"
              placeholder="Quantity"
              min={1}
              max={stock}
              defaultValue={1}
            />
          </div>
          <div className="">
            <p>Sizes</p>
            {["S", "M", "L", "XL", "XXL"].map((size: string, idx) => (
              <button
                key={idx}
                className={
                  "mr-4 mt-2 border-2 w-8 inline-block text-center rounded-lg " +
                  (selectedSize === size && "bg-rose-300 text-white")
                }
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="flex space-x-4 mt-4">
            <Button className="text-rose-600 border-rose-200 border-2 bg-rose-50 ">
              <i className="fa-solid fa-cart-shopping"></i> Add to Cart
            </Button>
            <Button className="text-rose-50">Buy</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// Get the paths we want to pre-render based on products
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map((product) => ({
    params: { id: String(product.id) },
  }));

  return {
    paths,
    fallback: false,
  };
};

// Get the product data for the specified product id
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = products.find((product) => product.id.toString() === params.id);

  return {
    props: data,
  };
};
