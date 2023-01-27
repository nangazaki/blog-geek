import styled, { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background-color: #0F0F0F;
}

::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.cores.primaria};
  border-radius: 4px;
}

::-moz-selection {
  background-color: #2895E2;
  color: #F8F8F8;
}

::selection {
  background-color: #2895E2;
  color: #F8F8F8;
}

body {
  width: 100%;
  background-color: #050607;
  color: #f2f2f2;
  font-family: "Ubuntu";
}

a {
  text-decoration: none;
  color: #fff;
}

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    color: #f2f2f2;
    font-family: 'Rubik';
    font-weight: 400;
    font-stretch: condensed;
}

h1 {
  font-size: 2.25em;
  line-height: 110%;
  margin-bottom: 40px;
}
h2 {
  font-size: 2em;
  line-height: 130%;
}
`;

export const ContainerStyled = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const CardGroup = styled.div`
  margin-top: 16px;
  margin-bottom: 80px;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: space-around;
`;