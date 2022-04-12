import ProductItem from "./ProductItem";
import productList from "../lib/data/productList";

export default function ProductList() {
  return (
    <div>
      <p className="text-center pt-20 pb-10 text-lg">OUR LATEST PRODUCTS</p>
      <div className="flex flex-wrap p-4 gap-y-4">
        {productList.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
