import Head from "next/head";

export default function NavBar() {
  return (
    <div className="fixed top-0 h-12 w-full bg-violet-100">
      <div className="flex space-x-2 justify-end mx-2 items-center h-full">
        <a>Home</a>
        <a>Products</a>
        <a>About</a>
        <a>Contact</a>
      </div>
    </div>
  );
}
