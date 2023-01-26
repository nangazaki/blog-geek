import { CardPost } from "../CardPost"

import { Container, Titulo } from "../../style"
import { RecentesContainer } from "./style"

export const Recentes = ({ recentesPosts }) => {
    return (
        <Container>
            <Titulo>Notícias recentes</Titulo>
            <RecentesContainer>
                {recentesPosts.map((post) => {
                    return (
                        <>
                            <CardPost post={post} key={post.id} />
                        </>
                    )
                })}
            </RecentesContainer>
        </Container>
    )
}
