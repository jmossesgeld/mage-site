import Head from "next/head";
import Image from "next/image";
import Landing from "../components/Landing";
import Layout from "../components/Layout";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Mage Co. Apparel</title>
      </Head>
      <Landing />
      <ProductList />
    </Layout>
  );
}
