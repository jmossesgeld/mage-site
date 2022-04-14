import ProductItem from "./ProductItem";
import products from "../lib/data/products";

export default function ProductList() {
  return (
    <div>
      <p className="text-center pt-20 pb-10 text-lg">OUR LATEST PRODUCTS</p>
      <div className="flex flex-wrap p-4 gap-y-4 ">
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
