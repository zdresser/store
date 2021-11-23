import styled from "styled-components";

export const StyledDropButton = styled.div`
  * {
    height: 15px;
  }
  button {
    border: 1px solid black;
    background: #ebfbff;
    cursor: pointer;
  }

  .dropbtn {
    background-color: white;
    width: 100%;
    height: 100%;
  }

  .dropbtn:hover {
    background-color: #b71c1c;
  }

  .links {
    border: none;
    outline: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .list {
    transform: scaleY(0);
    transform-origin: top;
    transition: 0.3s;
  }

  .newList {
    transform: scaleY(1);
  }

  .links:hover {
    background-color: #01579b;
    transform: scale(1.1);
  }
`;
