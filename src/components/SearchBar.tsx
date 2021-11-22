import React from "react";
import { StyledSearchBar } from "./SearchBar.styles";

const SearchBar: React.FC = () => {
  return (
    <StyledSearchBar>
      <input type='text' id='query' placeholder='Enter search term'></input>
      <div className='category'>
        <button className='dropbtn'>Sort by Category</button>
      </div>
      <div className='price'>
        <button className='dropbtn'>Sort by Price</button>
      </div>
    </StyledSearchBar>
  );
};

export default SearchBar;
