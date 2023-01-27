import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #424242;
  margin-bottom: 60px;
`;

export const Navbar = {
  Container: styled.nav`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  Menu: styled.ul`
  display: flex;
  gap: 14px;

  a {
    font-size: 1.125em;
    font-family: 'Rubik';
    color: ${({ theme }) => theme.cores.brancaPadrao};
    padding: 6px;
    transition: .4s ease-in;

    &:hover {
      color: ${({ theme }) => theme.cores.primaria};
    }
  }
`,
}
