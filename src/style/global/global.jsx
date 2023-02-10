import styled, { createGlobalStyle } from "styled-components";

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
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors['blue']};
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
  font-family: ${({ theme }) => theme.fonts['body']};
  color: ${({ theme }) => theme.colors['base-white']};
  background-color: ${({ theme }) => theme.colors['base-background']};
}

a {
  text-decoration: none;
  color: ${({ theme }) => theme.colors['base-pure-white']};
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
    font-weight: 400;
    font-stretch: condensed;
    color: ${({ theme }) => theme.colors['base-white']};
    font-family: ${({ theme }) => theme.fonts['title']};
}

h1 {
  line-height: 110%;
  margin-bottom: 40px;
  font-size: ${({ theme }) => theme.fontSizes['title-2xl']};
}
h2 {
  font-size: ${({ theme }) => theme.fontSizes['title-xl']};
  line-height: 130%;
}
`;

export const ContainerStyled = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  max-width: 1280px;
`;

export const CardGroup = styled.div`
  display: flex;
  margin-top: 16px;
  margin-bottom: 80px;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: space-around;
`;

export const Loader = styled.div`
  width: 100%;
  height: calc(100vh - 180px);
  display: flex;
  align-items: center;
  justify-content: center;
`;