/* eslint-disable @next/next/no-img-element */
import { GetStaticPaths, GetStaticProps } from "next";
import productList from "../../lib/data/productList";

const Button = ({ children, className, ...props }: any) => (
  <button
    className={
      "rounded-lg p-2 box-content text-xs text-slate-600 min-w-[25%] bg-rose-500 " + className
    }
    {...props}
  >
    {children}
  </button>
);

export default function ProductPage({ imgsrc, title, price }) {
  return (
    <div>
      <img className="mx-auto h-full  object-contain" src={imgsrc} alt={title} />
      <p>{title}</p>
      <p>{price}</p>
      <div className="flex justify-between">
        <Button className="text-rose-600 border-rose-200 border-2 bg-rose-50">
          <i className="fa-solid fa-cart-shopping"></i> Add to Cart
        </Button>
        <Button className="text-rose-50">Buy</Button>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = productList.map((product) => ({
    params: { id: String(product.id) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = productList.find((product) => product.id.toString() === params.id);
  return {
    props: data,
  };
};
