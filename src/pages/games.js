import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export const query = graphql`
    query {
        allWpGame {
            edges {
                node {
                    id
                    gameMeta {
                        name
                        releaseYear
                    }
                }
            }
        }
    }
  
`

const GamesPage = ({data: {allWpGame: {edges}}}) => {
  return (
    <Layout pageTitle="Games of MGS showroom">
      {edges.map((item) => {
          const game = item.node.gameMeta;
          return <p key={item.node.id}>{game.name} {game.releaseYear}</p>
      })}
    </Layout>
  )
}
export default GamesPage