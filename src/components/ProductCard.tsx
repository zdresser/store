import React from "react";
import { IProduct } from "../API";
import { StyledProductCard } from "./ProductCard.styles";
const ProductCard: React.FC<IProduct> = ({
  _id,
  name,
  image,
  category,
  reviews,
  price,
}) => {
  return (
    <StyledProductCard>
      <div className='card'>
        <img src={image} alt='Product' />
        <div className='info'>
          <h4>
            <b>{name}</b>
          </h4>
          <p>{price}</p>
        </div>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
