import styled, { createGlobalStyle } from "styled-components";

const CSSReset = createGlobalStyle`
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
  background-color: #1DA7EA;
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
`;

const Container = styled.div`
width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Titulo = styled.h2`
  font-family: Rubik;
  font-size: 2.25em;
  line-height: 2.475em;
`;

export { CSSReset, Container, Titulo }