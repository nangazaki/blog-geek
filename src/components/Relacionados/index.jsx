import { CardJogos } from "../CardJogos";


export const Relacionados = () => {

  const data = [
    {
      "id": 3,
      "titulo": "Netflix revela data de estreia da segunda temporada de Vinland Saga",
      "descricao": "Vinland Saga chega com sua segunda temporada na Netflix. ... da era de ascensão do Rei Canuto, o Grande II e uma trama de vingança viking.",
      "capa": "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2021/07/Vinland-Saga-Season-2-e1625659396193.png?resize=696%2C391&ssl=1",
      "categoria": "Animes",
      "autor": "Nangazaki44",
      "destaque": true,
      "corpo": '<p>Após o anúncio terceira parte da temporada final de Attack on Titan (Shingeki no Kyojin) deixou os fãs do anime muito mais hypados que antes, todos estão ansiosos para ver o desfecho da grande e já eleito (top 1 dos animes) história de Hajime Isayama.</p> <h3>História do Animes/Manngá</h3> <p>Os novos episódios de Attack on Titan devem adaptar os nove capítulos restantes do mangá e concluir a história de acordo com a visão original de Isayama. Segundo o estúdio Mappa, esses serão, de fato, os últimos episódios do anime, então podemos, enfim, esperar uma conclusão à saga.</p> <p>Spoilers moderados: Com as alianças forjadas, é hora da guerra. A ameaça de Eren Yeager e o Titã Fundador é iminente e difíceis decisões precisam ser tomadas.</p>',
      "data": ""
    },

    {
      "id": 2,
      "titulo": "Jujutsu Kaisen – 2ª temporada do anime tem data de estreia confirmada",
      "descricao": "Após uma longa e tortuosa espera, a nação otaku já pode comemorar. A segunda temporada do anime Jujutsu Kaisen estreia em...",
      "capa": "https://geekhere.com.br/wp-content/uploads/2022/09/jujutsu.jpg",
      "categoria": "Animes",
      "autor": "Nangazaki44",
      "destaque": false,
      "corpo": "<p>Após o anúncio terceira parte da temporada final de Attack on Titan (Shingeki no Kyojin) deixou os fãs do anime muito mais hypados que antes, todos estão ansiosos para ver o desfecho da grande e já eleito (top 1 dos animes) história de Hajime Isayama.</p> <h3>História do Animes/Manngá</h3> <p>Os novos episódios de Attack on Titan devem adaptar os nove capítulos restantes do mangá e concluir a história de acordo com a visão original de Isayama. Segundo o estúdio Mappa, esses serão, de fato, os últimos episódios do anime, então podemos, enfim, esperar uma conclusão à saga.</p> <p>Spoilers moderados: Com as alianças forjadas, é hora da guerra. A ameaça de Eren Yeager e o Titã Fundador é iminente e difíceis decisões precisam ser tomadas.</p>",
      "data": ""
    }
  ]

  return (
    <>
      <section className="container">
        <header>
          <h1>Leia tambem...</h1>
        </header>
        <div>
          {data.map((post, index) => {
            return <>
              <CardJogos post={post} key={index} />
            </>
          })}
        </div>
      </section>
    </>
  );
}