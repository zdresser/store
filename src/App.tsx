import React from "react";
import { Container } from "./App.styles";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <Container>
      <Header />
      <SearchBar />
    </Container>
  );
}

export default App;
