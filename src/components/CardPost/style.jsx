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
  font-size: 1.375em;
  line-height: 120%;
  margin-bottom: 14px;
`;

export const Descricao = styled.p`
  font-family: 'Ubuntu';
  line-height: 140%;
  font-weight: 300;
  margin-bottom: 18px;
  color: #ABABAB;
`;

export const LinkPost = styled.span`
  font-family: 'Rubik';
  font-size: 1em;
  color: ${({ theme }) => theme.cores.primaria};
`;