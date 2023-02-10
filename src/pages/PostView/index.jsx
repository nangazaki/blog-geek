import api from "../../service";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { useTheme } from "styled-components";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Loader } from "../../style/global/global";
import { Relacionados } from "../../components/Relacionados";
import { Autor, Data, PostContainer, PostCorpo, PostHeader, PostImagem, PostTitulo, Wrapper } from "./style";

export const PostView = () => {
  const theme = useTheme()
  const params = useParams(undefined)
  const [post, setPost] = useState()
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    api.get(`/postagens/${params.id}`).then((response) => {
      setPost(response.data)
    })
  }, [])

  return (
    <>
      {
        post ? (
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
                  {post.corpo.map((paragraphs) => {
                    return <>
                      <PostCorpo>{paragraphs}</PostCorpo>
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
        ) : (
          <Loader>
            <ClipLoader color={theme.colors['blue']} loading={loading} size={150} />
          </Loader>
        )}
    </>
  );
}