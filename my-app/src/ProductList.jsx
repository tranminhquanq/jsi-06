import React from "react";
import ProductItem from "./ProductItem";
// import { products } from "./mock/index";

function ProductList(props) {
  console.log(props.productItems);
  return (
    <section class="newProducts">
      <h1>News Products</h1>
      <div class="newProducts__container">
        {props.productItems.map((product) => (
          <ProductItem key={product.id} productInfo={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
