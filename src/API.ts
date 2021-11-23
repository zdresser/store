import axios from "axios";

export type Review = {
  _id: string;
  userName: string;
  text: string;
};

export interface IProduct {
  _id: string;
  category: string;
  name: string;
  price: number;
  image: string;
  reviews: Review[];
}

export const fetchProducts = async () => {
  const endpoint = "http://localhost:8000/products";

  const response = await axios.get(endpoint);

  return response.data[0].products;
};
