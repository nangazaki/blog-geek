import styled from "styled-components";

export const CardPostContainer = styled.div`
  max-width: 380px;
  width: 100%;
  height: 480px;
  border-radius: 6px;
  overflow: hidden;
  background-color: #18181815;
`;

export const ImgContainer = styled.div`
  height: 220px;
`;

export const Detalhes = styled.div`
  padding: 16px;
`;

export const Titulo = styled.h3`
  line-height: 120%;
  font-size: ${({ theme }) => theme.fontSizes['title-sm']};
  margin-bottom: 14px;
`;

export const Descricao = styled.p`
  color: #ABABAB;
  font-weight: 300;
  line-height: 140%;
  margin-bottom: 18px;
  font-family: ${({ theme }) => theme.fonts['body']};
  font-family: ${({ theme }) => theme.fontSizes['text-lg']};
`;

export const LinkPost = styled.span`
  font-family: ${({ theme }) => theme.fonts['title']};
  font-size: ${({ theme }) => theme.fontSizes['text-md']};
  color: ${({ theme }) => theme.colors['blue']};
`;