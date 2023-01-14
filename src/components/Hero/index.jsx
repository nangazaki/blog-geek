
const Hero = () => {
    const posts = [{
        "id": 1,
        "título": "One Punch Man: 3ª Temporada",
        "descrição": "",
        "capa": "https://img.ibxk.com.br/2020/02/17/17152824558257.jpg",
        "categoria": "Filmes",
        "autor": "Nangazaki44",
        "destaque": true
    },
    {
        "id": 2,
        "título": "O que esperar da 3T de One Punch Man",
        "descrição": "",
        "capa": "https://img.ibxk.com.br/2020/02/17/17152824558257.jpg",
        "categoria": "Animes",
        "autor": "Nangazaki44",
        "destaque": true
    },
    {
        "id": 3,
        "título": "Saiba como Avatar 2 vai revolucionar o cinema",
        "descrição": "",
        "capa": "https://w0.peakpx.com/wallpaper/280/328/HD-wallpaper-avatar-2-movie.jpg",
        "categoria": "Filmes",
        "autor": "Nangazaki44",
        "destaque": true
    }]

    return (
        <section className="container">
            <div className="hero">
                <div className="hero-1">
                    <article>
                        <div className="gradient"></div>
                        <img src={posts[0].capa} alt={posts[0].título} />
                        <div className="descricao">
                            <a href="" className="tag">{posts[0].categoria}</a>
                            <h3 className="">{posts[0].título}</h3>
                        </div>
                    </article>
                </div>

                <div className="hero-2">
                    <article>
                        <div className="gradient"></div>
                        <img src={posts[1].capa} alt={posts[1].título} />
                        <div className="descricao">
                            <a href="" className="tag">{posts[1].categoria}</a>
                            <div>
                                <h3 className="">{posts[1].título}</h3>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div className="gradient"></div>
                        <img src={posts[2].capa} alt={posts[2].título} />
                        <div className="descricao">
                            <a href="" className="tag">{posts[2].categoria}</a>
                            <div>
                                <h3 className="">{posts[2].título}</h3>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Hero;