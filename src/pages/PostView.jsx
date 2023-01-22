import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../service";
import Footer from "../components/Footer";
import { Relacionados } from "../components/Relacionados";

const PostView = () => {

  const [visible, setVisible] = useState(false)
  const [post, setPost] = useState()
  const params = useParams()

  useEffect(() => {
    api.get(`/postagens/${params.id}`).then((response) => {
      setPost(response.data)
    })
  }, [])

  setTimeout(() => {
    setVisible(true)
  }, 1000)

  return (
    <>
      {visible && (
        <>
          <section>
            <article className="postagem">
              <header>
                <h1>{post.titulo}</h1>
                <div className="flex-between">
                  <p className="autor">Autor: <span>{post.autor}</span></p>
                  <span className="data">18 de Dezembro de 2022</span>
                </div>
              </header>
              <div>
                <img src={post.capa} alt={post.titulo} className="imagem" />
              </div>
              <div className="corpo">
                  <p>{`${post.corpo}`}</p>
              </div>
              <div className="tag">
                <p>#Animes</p>
              </div>
            </article>
          </section>
          <Relacionados />
          <Footer />
        </>
      )}
    </>
  );
}

export default PostView;