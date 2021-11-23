import React, { SetStateAction, useState } from "react";
import { StyledSearchBar } from "./SearchBar.styles";
import PriceButton from "./PriceButton";
import CategoryButton from "./CategoryButton";
import { SetState } from "immer/dist/internal";
//make components for dropdown buttons?
type Props = {
  sort: string;
  setSort: React.Dispatch<SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<SetStateAction<string>>;
};
const SearchBar: React.FC<Props> = ({
  sort,
  setSort,
  category,
  setCategory,
}) => {
  return (
    <StyledSearchBar>
      <form>
        <input type='text' id='query' placeholder='Enter search term' />
        <button>Search</button>
      </form>
      <CategoryButton category={category} setCategory={setCategory} />

      <PriceButton sort={sort} setSort={setSort} />
    </StyledSearchBar>
  );
};

export default SearchBar;
