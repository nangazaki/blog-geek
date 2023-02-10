import styled from "styled-components";

export const PostContainer = styled.article`
  max-width: 900px;
  width: 100%;
  padding: 0 24px;
  margin: 0 auto;
  margin-bottom: 80px;
`;

export const PostHeader = styled.header`
  margin-bottom: 32px;
`;

export const PostTitulo = styled.h1`
  color: #f8f8f8;
  margin-bottom: 40px;
`;

export const Data = styled.span`
  color: #ABABAB;
`;

export const Autor = styled.p`
`;

export const PostImagem = styled.img`
  width: 100%;
  border-radius: 8px;
  background-color: $azul-normal;
  margin-bottom: 32px;
  overflow: hidden;
`;

export const PostCorpo = styled.p`
  color: #ababab;
  font-weight: 300;
  margin-bottom: 16px;
  line-height: 1.575em;
  font-family: ${({ theme }) => theme.fonts['body']};
  font-size: ${({ theme }) => theme.fontSizes['text-lg']};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
