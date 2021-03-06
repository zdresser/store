import styled from "styled-components";

export const StyledSearchBar = styled.div`
  grid-area: search;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 2fr 1fr 1fr;
  height: 30px;
  padding: 0 5px;

  form {
    display: flex;
    flex-direction: row;
    border: 1px solid gray;
  }

  input {
    flex-grow: 2;
    border: none;
  }

  input:focus {
    outline: none;
  }
  button {
    border: 1px solid black;
    background: #ebfbff;
    cursor: pointer;
  }

  .dropbtn {
    background-color: white;
    width: 100%;
  }

  .dropbtn:hover {
    background-color: #b71c1c;
  }

  .links {
    border: none;
    outline: none;
    transition: 0.3s;

    width: 100%;
    padding: 10px 0;
    justify-content: center;
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
