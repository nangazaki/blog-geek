import styled from "styled-components";

const CardJogosContainer = styled.div`
    width: calc(50% - 24px);
    height: 300px;
    position: relative;
    border-radius: 6px;
    overflow: hidden;

    @media (max-width: 1140px) {
      width: 100%;
    }
`;

const Detalhes = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding: 24px;
`;

const Titulo = styled.h3`
  font-size: 1.375em;
  line-height: 130%;
  margin-top: 8px;
`;
        
const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(3, 3, 3, 0.4) 53.65%, rgb(3, 3, 3) 100%);
`; 

export { CardJogosContainer, Detalhes, Titulo, Gradient }