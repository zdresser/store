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

export interface IParams {
  query?: string;
  price?: string;
  category?: string;
}

export const fetchProducts = async (params: IParams) => {
  const endpoint = "http://localhost:8000/products";

  const response = await axios.get(endpoint, {
    params,
  });
  console.log(response);

  return response.data[0].products;
};
