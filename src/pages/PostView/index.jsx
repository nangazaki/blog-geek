import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../service";
import { Footer } from "../../components/Footer";
import { Relacionados } from "../../components/Relacionados";
import { Autor, Data, PostContainer, 
         PostCorpo, PostHeader, PostImagem, PostTitulo, Wrapper 
        } from "./style";

export const PostView = () => {

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
            <PostContainer>
              <PostHeader>
                <PostTitulo>{post.titulo}</PostTitulo>
                <Wrapper>
                  <Autor>Autor: <span>{post.autor}</span></Autor>
                  <Data>18 de Dezembro de 2022</Data>
                </Wrapper>
              </PostHeader>
              <div>
                <PostImagem src={post.capa} alt={post.titulo} />
              </div>
              <div>
                {post.corpo.map((p) => {
                  return <>
                    <PostCorpo>{p}</PostCorpo>
                  </>
                })}
              </div>
              <div>
                <p>#{post.categoria}</p>
              </div>
            </PostContainer>
          </section>
          <Relacionados />
          <Footer />
        </>
      )}
    </>
  );
}