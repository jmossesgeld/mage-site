import Image from "next/image";

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

export default function ProductItem({ name, price, image }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4 h-96 transition-all">
      <div className="flex flex-col bg-white justify-between shadow-md px-3 h-full transition-all hover:-translate-y-2 cursor-pointer">
        <div className="h-5/6">
          <div className="mb-4 h-1/2 ">
            <img className="mx-auto h-full  object-contain" src={image} alt={name} />
          </div>
          <div className="border-t border-slate-200 my-8" />
          <p>{name}</p>
          <p className="text-lg mt-2 text-rose-500">₱{price}</p>
        </div>
        {/* <div className="flex justify-between">
          <Button className="text-rose-600 border-rose-200 border-2 bg-rose-50">
            <i className="fa-solid fa-cart-shopping"></i> Add to Cart
          </Button>
          <Button className="text-rose-50">Buy</Button>
        </div> */}
      </div>
    </div>
  );
}
