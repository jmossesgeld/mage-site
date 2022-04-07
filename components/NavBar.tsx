import Link from "next/link";
import Image from "next/image";

const NavLink = ({
  children,
  className,
  ...props
}: {
  children: any;
  className?: string;
  [x: string]: any;
}) => (
  <Link href={props.href}>
    <a
      className={
        "cursor-pointer hover:text-teal-400 hidden md:inline whitespace-nowrap " + className
      }
      {...props}
    >
      {children}
    </a>
  </Link>
);

export default function NavBar() {
  return (
    <div className="fixed flex justify-between px-4 items-center top-0 h-12 w-full bg-slate-800 text-slate-50 z-10">
      <Link href="/">
        <a className="text-lg font-bold text-teal-100 hover:text-white cursor-pointer"> MAGE CO.</a>
      </Link>
      {/* <input
        placeholder=" Search for a product..."
        className="w-1/3 min-w-fit text-slate-800 px-2 py-1"
      /> */}
      <div className="flex space-x-8 justify-end items-center h-full">
        <NavLink
          className="text-rose-500 hover:text-rose-300 transition-all hover:-translate-y-1"
          href="/"
        >
          New In!
        </NavLink>
        <NavLink href="/">Men</NavLink>
        <NavLink href="/">Women</NavLink>
        <NavLink href="/">T-shirts</NavLink>
        <NavLink href="/">Dresses and Blouses</NavLink>

        <NavLink href="/cart">
          <i className="fa-solid fa-cart-shopping"></i> Cart
        </NavLink>
      </div>
    </div>
  );
}
