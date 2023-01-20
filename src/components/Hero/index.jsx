
const Hero = ({heroPosts}) => {

    return (
        <section className="container">
            <div className="hero">
                <div className="hero-1">
                    <article>
                        <div className="gradient"></div>
                        <img src={heroPosts[0].capa} alt={heroPosts[0].titulo} />
                        <div className="descricao">
                            <a href="" className="tag">{heroPosts[0].categoria}</a>
                            <h3 className="">{heroPosts[0].titulo}</h3>
                        </div>
                    </article>
                </div>

                <div className="hero-2">
                    <article>
                        <div className="gradient"></div>
                        <img src={heroPosts[1].capa} alt={heroPosts[1].titulo} />
                        <div className="descricao">
                            <a href="" className="tag">{heroPosts[1].categoria}</a>
                            <div>
                                <h3 className="">{heroPosts[1].titulo}</h3>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div className="gradient"></div>
                        <img src={heroPosts[2].capa} alt={heroPosts[2].titulo} />
                        <div className="descricao">
                            <a href="" className="tag">{heroPosts[2].categoria}</a>
                            <div>
                                <h3 className="">{heroPosts[2].titulo}</h3>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );

}

export default Hero;