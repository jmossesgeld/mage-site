import Link from "next/link";
import Image from "next/image";
import React from "react";
import Menu, { MenuButton, MenuItems } from "../Controls/Menu";

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
    <a className={"cursor-pointer hover:text-teal-400 whitespace-nowrap " + className} {...props}>
      {children}
    </a>
  </Link>
);

export default function NavBar() {
  const categories = ["Men", "Women", "T-shirts", "Dresses and Blouses"];

  return (
    <div className="fixed flex justify-between px-4 items-center top-0 h-12 w-full bg-slate-800 text-slate-50 z-20">
      <Link href="/">
        <a className="text-lg font-bold text-teal-100 hover:text-white cursor-pointer"> MAGE CO.</a>
      </Link>
      <div className="hidden md:flex space-x-8 justify-end items-center  h-full">
        <NavLink className="text-rose-500 hover:text-rose-300 animate-pulse" href="/">
          New In!
        </NavLink>
        {categories.map((category, idx) => (
          <NavLink key={idx} href="/">
            {category}
          </NavLink>
        ))}
        <NavLink href="/cart">
          <i className="fa-solid fa-cart-shopping"></i> Cart
        </NavLink>
      </div>
      <div className=" md:hidden">
        <Menu>
          <MenuButton className="border-2 px-2 ">=</MenuButton>
          <MenuItems className="absolute right-0 mt-2 flex flex-col bg-slate-800 shadow-lg mr-2">
            {categories.map((item, idx) => (
              <NavLink key={idx} href="/" className="p-4 text-xl">
                {item}
              </NavLink>
            ))}
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
}
