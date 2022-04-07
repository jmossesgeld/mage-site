import Link from "next/link";
import Image from "next/image";

const NavLink = ({ children, ...props }) => (
  <a className="cursor-pointer hover:text-blue-400 hidden md:inline" {...props}>
    {children}
  </a>
);

export default function NavBar() {
  return (
    <div className="sticky flex justify-around items-center top-0 h-12 w-full bg-slate-800 text-slate-50">
      <input placeholder=" Search" className="w-1/3 min-w-fit text-slate-800 px-2 py-1" />
      <div className="flex space-x-8 justify-end items-center h-full">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/">Products</NavLink>
        <NavLink href="/cart">
          <i className="fa-solid fa-cart-shopping"></i> Cart
        </NavLink>
      </div>
    </div>
  );
}
