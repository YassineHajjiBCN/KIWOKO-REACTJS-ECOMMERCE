import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, imagebra}) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        imagebra: imagebra,
      },
    });
  };

  return (
    <div className="product">
      <img src={imagebra} alt="" />
     </div>
  );
}

export default Product;
