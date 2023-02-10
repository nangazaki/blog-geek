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
    padding: 6px;
    font-size: 18px;
    transition: .4s ease-in;
    color: ${({ theme }) => theme.colors['base-white']};
    font-family: ${({ theme }) => theme.fonts['title']};

    &:hover {
      color: ${({ theme }) => theme.colors['blue']};
    }
  }
`,
}
