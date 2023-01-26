import styled from "styled-components";

const CardPostContainer = styled.div`
  max-width: 380px;
  width: 100%;
  height: 480px;
  border-radius: 6px;
  overflow: hidden;
  background-color: #18181815;
`;

const ImgContainer = styled.div`
  height: 220px;
`;

const Detalhes = styled.div`
  padding: 16px;
`;  

const Titulo = styled.h3`
  font-size: 1.375em;
  line-height: 130%;
  margin-bottom: 14px;
`;

const Descricao = styled.p`
  font-family: 'Ubuntu';
  line-height: 140%;
  font-weight: 300;
  margin-bottom: 18px;
  color: #ABABAB;
`;

const LinkPost = styled.span`
  font-family: 'Rubik';
  font-size: 1em;
  color: #1DA7EA;
`;


export { CardPostContainer, ImgContainer, Detalhes, Titulo, Descricao, LinkPost }