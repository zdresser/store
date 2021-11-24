import React from "react";
import { useEffect, useState } from "react";
import { Container } from "./App.styles";
import Header from "./components/Header";
import ProductsDisplay from "./components/Products";
import SearchBar from "./components/SearchBar";
import { IProduct, IParams, fetchProducts } from "./API";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [query, setQuery] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  let params: IParams = {
    query,
    price: sort,
    category,
  };

  useEffect(() => {
    //populate params obj
    if (query) {
      params.query = query;
    }
    if (sort) {
      params.price = sort;
    }
    if (category) {
      params.category = category;
    }
    //query API for products on page load
    APIquery(params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, sort, category]);

  const APIquery = async (params: IParams) => {
    setProducts([]);
    console.log(params);
    const prods = await fetchProducts(params);
    setProducts(prods);
  };

  return (
    <Container>
      <Header />
      <SearchBar
        sort={sort}
        setSort={setSort}
        category={category}
        setCategory={setCategory}
        query={query}
        setQuery={setQuery}
      />
      <ProductsDisplay products={products} callback={setSort} />
    </Container>
  );
}

export default App;
