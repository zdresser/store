import styled from "styled-components";

export const StyledProductCard = styled.div`
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }
  img {
    width: 100%;
  }
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  .info {
    padding: 2px 16px;
  }
`;
