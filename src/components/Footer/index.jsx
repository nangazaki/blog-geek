
const Footer = () => {
  return (
    <>
      <section className="container">
        <div className="newsletter">
          <h2>Quer ser avisado sobre as novas postagens do Blog?</h2>
          <div className="lado-direito">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque.</span>
            <div className="form">
              <input placeholder="Insira o teu e-mail..." />
              <button>Cadastrar</button>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <p>Copyright © 2023 Helder Cambuta. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer
