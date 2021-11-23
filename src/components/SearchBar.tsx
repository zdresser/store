import React, { SetStateAction, useState } from "react";
import { StyledSearchBar } from "./SearchBar.styles";
import PriceButton from "./PriceButton";
import CategoryButton from "./CategoryButton";
import { SetState } from "immer/dist/internal";
import { getSuggestedQuery } from "@testing-library/react";
//make components for dropdown buttons?
type Props = {
  sort: string;
  setSort: React.Dispatch<SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<SetStateAction<string>>;
  query: string;
  setQuery: React.Dispatch<SetStateAction<string>>;
};
const SearchBar: React.FC<Props> = ({
  sort,
  setSort,
  category,
  setCategory,
  query,
  setQuery,
}) => {
  const [term, setTerm] = useState<string>("");
  const handleSearch = (e: any) => {
    // e.preventDefault();
    setQuery(term);
  };
  return (
    <StyledSearchBar>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          placeholder='Enter search term'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
      <CategoryButton category={category} setCategory={setCategory} />

      <PriceButton sort={sort} setSort={setSort} />
    </StyledSearchBar>
  );
};

export default SearchBar;
