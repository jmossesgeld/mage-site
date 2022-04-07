import Head from "next/head";
import Image from "next/image";
import Landing from "../components/Landing";
import NavBar from "../components/NavBar";
import ProductItem from "../components/ProductItem";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mage Co. Apparel</title>
      </Head>
      <NavBar />
      <Landing />
      <ProductList />
    </div>
  );
}
