import styled from "styled-components";

const Newsletter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 80px;
`; 

const Titulo = styled.h2`
  font-family: Rubik;
  font-size: 1.875em;
  line-height: 2.0625em;
  line-height: 110%;
  max-width: 450px;
`;
  
const LadoDireito = styled.div`
  max-width: calc(50% - 16px);
    
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const Span = styled.span`
  display: block;
  font-family: 'Ubuntu';
  font-size: 1em;
  font-weight: 300;
  line-height: 150%;
  color: #ABABAB;
`;

const Form = styled.form`
  display: inline-flex;
  gap: 16px;
  margin-top: 16px;
`;

const Input = styled.input`
  width: 100%;
  max-width: 380px;
  height: 40px;
  background: rgba(217, 217, 217, 0.1);
  border-radius: 4px;
  border: none;
  padding: 8px 16px;
  font-family: 'Ubuntu';
  font-size: 1em;
  font-weight: 300;
  color: #585858;
`;

const Button = styled.button`
  width: 160px;
  height: 40px;
  background: ${({ theme }) => theme.cores.primaria};
  border-radius: 4px;
  border: none;
  font-family: 'Rubik';
  font-size: 18px;
  font-weight: 400;
  color: #f8f8f8;
  cursor: pointer;
`;

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  background: #0F0F0F;
`; 

const FooterText = styled.p`
  color: #f2f2f2;
  font-size: 18px;
  font-family: 'Ubuntu';
  font-weight: 300;
  
  a {
    color: #f2f2f2;
    
    &:hover {
      transition: .5 ease-in;
      color: #3A7BD5;
    }
  }
`;

export { Newsletter, Titulo, LadoDireito, Span, Form, Input, Button, FooterContainer, FooterText }
