import styled from "styled-components";

export const StyledProducts = styled.div`
  display: grid;
  grid-area: products;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin: 0 50px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  } ;
`;
