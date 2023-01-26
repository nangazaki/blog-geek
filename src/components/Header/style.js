import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #424242;
  margin-bottom: 60px;
`;

const Navbar = {
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
`,

  Item: styled.span`
    font-family: 'Rubik';
    color: #f2f2f2;
    padding: 6px;
    transition: .4s ease-in;

    &:hover {
      color: #1DA7EA;
    }
  `,
}


export { Container, Navbar }
