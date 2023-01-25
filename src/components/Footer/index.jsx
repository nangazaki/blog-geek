import { useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState('')

  function newsletter() {
    console.log(email.value)
  }

  return (
    <>
      <section className="container">
        <div className="newsletter">
          <h2>Quer ser avisado sobre as novas postagens do Blog?</h2>
          <div className="lado-direito">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque.</span>
            <div className="form">
              <input type="email" placeholder="Insira o teu e-mail..." />
              <button onClick={newsletter}>Cadastrar</button>
              {email}
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <p>Copyright © 2023 <a href="https://www.linkedin.com/in/helder-cambuta-81668a192/">Helder Cambuta</a>. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
