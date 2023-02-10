import { CardPost } from "../CardPost"
import { CardGroup, ContainerStyled } from "../../style/global/global"

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
