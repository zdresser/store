import styled from "styled-components";

export const StyledSearchBar = styled.div`
  grid-area: search;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 2fr 1fr 1fr;
  height: 30px;
  padding: 0 5px;

  button {
    background-color: white;
    width: 100%;
    height: 100%;
  }

  .category {
  }
`;
