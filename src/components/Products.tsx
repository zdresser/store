import React from "react";
import { StyledProducts } from "./Products.styles";
import { IProduct } from "../API";
import ProductCard from "./ProductCard";
interface ProductsProps {
  products: IProduct[];
  //add type later
  callback: any | null;
}
const ProductsDisplay: React.FC<ProductsProps> = ({ products, callback }) => {
  return (
    <StyledProducts>
      {products.map((product) => {
        return (
          <ProductCard
            _id={product._id}
            key={product._id}
            name={product.name}
            image={product.image}
            category={product.category}
            price={product.price}
            reviews={product.reviews}
          />
        );
      })}
    </StyledProducts>
  );
};

export default ProductsDisplay;
