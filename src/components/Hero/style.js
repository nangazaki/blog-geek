import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
`;

const HeroSection = {
  Hero: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-bottom: 80px;

    @media (max-width: 1140px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
    }
  `,

  HeroCard1: styled.div`
    width: 100%;
    max-height: 600px;
  `, 

  HeroCard2: styled.div`
    width: 100%;
    height: 100%;
    max-height: 600px;
    display: flex;
    gap: 24px;
    flex-direction: column;
  `,

  Descricao: styled.div`
    position: absolute;
    bottom: 0px;
    left: 0px;
    padding: 24px;
  `,

  Tag: styled.span`
    padding: 6px 14px;
    border-radius: 4px;
    background: #1DA7EA;
    color: #fff;
  `,

  Titulo: styled.h3`
    font-family: 'Rubik';
    font-size: 1.5em;
    line-height: 130%;
    margin-top: 24px;
    color: #fff;
    font-weight: 400;
  `,

  Gradient: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(3,3,3,0.4) 53.65%, rgb(3,3,3) 100%);
  `,

  Post: styled.article`
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    
    @media(max-width: 1140px) {
      height: 400px;
    }
  `
}
 

export { Section, HeroSection }