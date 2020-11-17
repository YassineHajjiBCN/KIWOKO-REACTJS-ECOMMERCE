import React from "react";
import "./BrandProduct.css";
import { useStateValue } from "../StateProvider";

function Product({ id, subtitle, image, price, ratingpr, minititlepr }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        subtitle: subtitle,
        image: image,
        price: price,
        ratingpr: ratingpr,
      },
    });
  };

  return (
    <div className="BrandProduct">
      <img src={image} alt="" />
    <div className="BrandProduct__info">
        <p className="minititle-brand">{minititlepr}</p>
        <p className="title-brand">{subtitle}</p>
        <p className="product__price">
          <small>€</small>
          <strong>{price}</strong>
        </p>
        
        <div className="product__rating">
          {Array(ratingpr)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
      </div>
    </div>

    <button onClick={addToBasket}>Añadir</button>

  </div>
  );
}

export default Product;
