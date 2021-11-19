import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "header header header"
    "search search search"
    "items items items"
    "items items items";

  background-color: #fafafa;
`;
