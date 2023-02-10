import { useState } from "react";
import { ContainerStyled } from "../../style/global/global";

import { Button, FooterContainer, FooterText, Form, Input, LadoDireito, Newsletter, Span, Titulo } from "./style";

export const Footer = () => {
  const [email, setEmail] = useState('')

  function newsletter() {
    console.log(email.value)
  }

  return (
    <>
      <section>
        <ContainerStyled>
          <Newsletter>
            <Titulo>Quer ser avisado sobre as novas postagens do Blog?</Titulo>
            <LadoDireito>
              <Span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque.</Span>
              <Form>
                <Input type="email" placeholder="Insira o teu e-mail..." />
                <Button onClick={newsletter}>Cadastrar</Button>
                {email}
              </Form>
            </LadoDireito>
          </Newsletter>
        </ContainerStyled>
      </section>
      <FooterContainer>
        <ContainerStyled>
          <FooterText>Copyright © 2023 <a href="https://www.linkedin.com/in/helder-cambuta-81668a192/">Helder Cambuta</a>. Todos os direitos reservados.</FooterText>
        </ContainerStyled>
      </FooterContainer>
    </>
  );
}
