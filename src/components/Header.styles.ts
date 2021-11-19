import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #ebfbff;
  grid-area: header;
  height: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 3px solid lightgray;
  border-radius: 3px;

  h1 {
    color: gray;
  }
`;
