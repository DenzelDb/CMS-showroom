import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'

export const query = graphql`
query ($id: String) {
  wpGame(id: {eq: $id}) {
    gameMeta {
      canon
      description
      name
      releaseYear
      featuredMetalGear {
        name
      }
    }
  }
}
`

const GamePage = ({data: { wpGame: {gameMeta: game}}}) => {
  return (
    <Layout pageTitle={game.name}>
      <div>
        <h3>{game.releaseYear}</h3>
        <div dangerouslySetInnerHTML={{__html: game.description}} />
        <p>Canon?: {game.canon}</p>
        <p>Featured Metal Gear: {game.featuredMetalGear.name}</p>
      </div>
    </Layout>
  )
}

export default GamePage