import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme["green-500"]};
  }

  body {
    background-color: ${({ theme }) => theme["gray-800"]};
    color: ${({ theme }) => theme["gray-100"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    width: 100%;
    height: auto;
    max-width: max-content;
  }

  ul {
    list-style: none;
  }
`;
