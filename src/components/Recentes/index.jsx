import { CardGroup, ContainerStyled } from "../../GlobalStyle.style"
import { CardPost } from "../CardPost"

export const Recentes = ({ recentesPosts }) => {
    return (
        <ContainerStyled>
            <h2>Notícias recentes</h2>
            <CardGroup>
                {recentesPosts.map((post) => {
                    return (
                        <>
                            <CardPost post={post} key={post.id} />
                        </>
                    )
                })}
            </CardGroup>
        </ContainerStyled>
    )
}
