import NavBar from "./navbar";
import { Menu } from "@headlessui/react";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
