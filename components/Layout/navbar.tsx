import Link from "next/link";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";

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
    <a className={"cursor-pointer hover:text-teal-400  whitespace-nowrap " + className} {...props}>
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
      {/* <input
        placeholder=" Search for a product..."
        className="w-1/3 min-w-fit text-slate-800 px-2 py-1"
      /> */}
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
          <Menu.Button className="border-2 px-2 ">=</Menu.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <div>
              <Menu.Items className="absolute right-0 mt-2 flex flex-col bg-slate-800 shadow-lg mr-2">
                {categories.map((item, idx) => (
                  <Menu.Item key={idx}>
                    <NavLink href="/" className=" p-6 text-xl">
                      {item}
                    </NavLink>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </div>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
