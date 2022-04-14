/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function ProductItem({ id, title, price, imgsrc }) {
  return (
    <Link href={`/products/${id}`}>
      <a className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4 transition-all">
        <div className="h-full flex flex-col bg-white justify-between border-2 shadow-lg px-3 pb-4 transition-all hover:-translate-y-2 cursor-pointer">
          <div className="h-5/6">
            <div className="mb-4">
              <img className=" mx-auto" src={imgsrc} alt={title} />
            </div>
            <div className="border-t border-slate-200 my-8" />
            <p>{title}</p>
            <p className="text-lg mt-2 text-rose-500">₱{price}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}
