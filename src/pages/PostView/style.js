import styled from "styled-components";

const PostContainer = styled.article`
  max-width: 900px;
  width: 100%;
  padding: 0 24px;
  margin: 0 auto;
  margin-bottom: 80px;
`;

const PostHeader = styled.header`
  margin-bottom: 32px;
`;

const PostTitulo = styled.h1`
  font-family: Rubik;
  font-size: 2.25em;
  line-height: 2.475em;
  line-height: 110%;
  color: #f8f8f8;
  margin-bottom: 40px;
`;

const Data = styled.span`
  color: #ABABAB;
`;

const Autor = styled.p`
`;

const PostImagem = styled.img`
  width: 100%;
  border-radius: 8px;
  background-color: $azul-normal;
  margin-bottom: 32px;
  overflow: hidden;
`;

const PostCorpo = styled.p`
  color: #ababab;
  font-family: Ubuntu;
  font-weight: 300;
  font-size: 1.125em;
  line-height: 1.575em;
  margin-bottom: 16px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { PostContainer, PostHeader, PostTitulo, Data, Autor, PostImagem, PostCorpo, Wrapper }