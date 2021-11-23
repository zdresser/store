import React from "react";
import { useEffect, useState } from "react";
import { Container } from "./App.styles";
import Header from "./components/Header";
import ProductsDisplay from "./components/Products";
import SearchBar from "./components/SearchBar";
import { IProduct, fetchProducts } from "./API";
function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [sort, setSort] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  useEffect(() => {
    //query API for products on page load
    APIquery();
  }, []);

  const APIquery = async () => {
    const prods = await fetchProducts();
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
      />
      <ProductsDisplay products={products} callback={setSort} />
    </Container>
  );
}

export default App;
