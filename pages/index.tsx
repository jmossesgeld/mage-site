import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mage Co. Apparel</title>
      </Head>
      <NavBar />
    </div>
  );
}
