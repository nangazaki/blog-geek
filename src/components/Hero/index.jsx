import { Link } from "react-router-dom";

const Hero = ({ heroPosts }) => {

    const links = heroPosts.map((post) => post.titulo.toLowerCase().replace(/[ ]+/g, '-'))

    return (
        <section className="container">
            <div className="hero">
                <div className="hero-1">
                    <article>
                        <div className="gradient"></div>
                        <img src={heroPosts[0].capa} alt={heroPosts[0].titulo} />
                        <div className="descricao">
                            <Link className="tag">{heroPosts[0].categoria}</Link>
                            <div>
                                <Link to={`post/${heroPosts[0].id}/${links[0]}`}>
                                    <h3 className="">{heroPosts[0].titulo}</h3>
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>

                <div className="hero-2">
                    <article>
                        <div className="gradient"></div>
                        <img src={heroPosts[1].capa} alt={heroPosts[1].titulo} />
                        <div className="descricao">
                            <Link className="tag">{heroPosts[1].categoria}</Link>
                            <div>
                                <Link to={`post/${heroPosts[1].id}/${links[1]}`}>
                                    <h3 className="">{heroPosts[1].titulo}</h3>
                                </Link>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div className="gradient"></div>
                        <img src={heroPosts[2].capa} alt={heroPosts[2].titulo} />
                        <div className="descricao">
                            <a href="" className="tag">{heroPosts[2].categoria}</a>
                            <div>
                                <Link to={`post/${heroPosts[2].id}/${links[2]}`}>
                                    <h3 className="">{heroPosts[2].titulo}</h3>
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Hero;