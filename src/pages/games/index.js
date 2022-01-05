import * as React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'

export const query = graphql`
    query {
        allWpGame {
            edges {
                node {
                    gameMeta {
                        name
                    }
                id
                slug
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
          return <Link to={`/games/${item.node.slug}`}><p key={item.node.id}>{game.name}</p></Link>
      })}
    </Layout>
  )
}
export default GamesPage