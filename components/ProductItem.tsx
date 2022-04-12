/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function ProductItem({ id, title, price, imgsrc }) {
  return (
    <Link href={`/products/${id}`}>
      <a className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4 h-96 transition-all">
        <div className="flex flex-col bg-white justify-between shadow-md px-3 h-full transition-all hover:-translate-y-2 cursor-pointer">
          <div className="h-5/6">
            <div className="mb-4 h-1/2 ">
              <img className="mx-auto h-full  object-contain" src={imgsrc} alt={title} />
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
