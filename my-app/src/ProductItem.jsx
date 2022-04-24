import React from "react";

const ProductItem = (props) => {
  return (
    <div class="newProducts__item">
      <div class="item__image">
        <img src={props.productInfo.image} alt="p6" />
        <div class="item__image-child">
          <img src={props.productImage} alt="p5" />
        </div>
      </div>
      <div class="item__content">
        <h3>{props.productInfo.productName}</h3>
        <p>
          <strong>XL/XXL/S</strong>
        </p>
        <div class="item__text">
          <p>
            <del>${props.productInfo.oldPrice}</del>
          </p>
          <p>
            <strong>${props.productInfo.newPrice}</strong>
          </p>
        </div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};
export default ProductItem;
