import styled from "styled-components";

const Newsletter = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 80px;
`;

const Titulo = styled.h2`
  font-family: ${({ theme }) => theme.fonts['title']};
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
  font-family: ${({ theme }) => theme.fonts['body']};
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
  font-family: ${({ theme }) => theme.fonts['body']};
  font-size: 1em;
  font-weight: 300;
  color: #585858;
`;

const Button = styled.button`
  width: 160px;
  height: 40px;
  background: ${({ theme }) => theme.colors['blue']};
  border-radius: 4px;
  border: none;
  font-family: ${({ theme }) => theme.fonts['title']};
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
  font-family: ${({ theme }) => theme.fonts['body']};
  font-weight: 300;
  
  a {
    color: #f2f2f2;
    
    &:hover {
      transition: .5 ease-in;
      color: ${({ theme }) => theme.colors['blue']};
    }
  }
`;

export { Newsletter, Titulo, LadoDireito, Span, Form, Input, Button, FooterContainer, FooterText }
