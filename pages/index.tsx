import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Product from "../components/Product";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mage Co. Apparel</title>
      </Head>
      <NavBar />
      <ProductList>
        <Product
          name="Premium Demon Slayer Tshirt (Unisex)"
          price="P230.00"
          image="https://cf.shopee.ph/file/d740b81f3794d256f4cf350479a49d5e"
        />
        <Product
          name="Zara plain Polo Top Pastel"
          price="P120.00"
          image="https://cf.shopee.ph/file/b6628d02f078ee184e4e69ff347fe547_tn"
        />
        <Product
          name="Korean puff crop top"
          price="P90.00"
          image="https://cf.shopee.ph/file/68d50a7a1f35c1362dac65377c552703_tn"
        />
        <Product
          name="Collared shirt for women"
          price="P90.00"
          image="https://cf.shopee.ph/file/31f54086cb2e410705da423e42eb6c85_tn"
        />
      </ProductList>
    </div>
  );
}
