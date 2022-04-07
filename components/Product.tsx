import Image from "next/image";

const Button = ({ children, className, ...props }: any) => (
  <button
    className={className + " rounded-lg m-2 p-2 text-xs text-slate-600 w-1/3 bg-rose-300"}
    {...props}
  >
    {children}
  </button>
);

export default function Product({ name, price, image }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 ">
      <div className="flex flex-col shadow-md h-full p-2">
        <div className="my-4 h-1/2 border-2 ">
          <img className="m-auto h-full object-contain" src={image} alt={name} />
        </div>
        <div className="flex justify-between">
          <p>{name}</p>
        </div>
        <p>{price}</p>
        <div className="flex justify-between">
          <Button className="text-rose-50">Add to Cart</Button>
          <Button className="text-white bg-slate-500">Buy</Button>
        </div>
      </div>
    </div>
  );
}
