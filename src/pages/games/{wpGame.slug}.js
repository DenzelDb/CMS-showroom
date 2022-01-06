import * as React from 'react'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
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
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
}

`

const GamePage = ({data: { wpGame: {gameMeta: game}}}) => {
  const image = getImage(game.featuredMetalGear.image.localFile)
  return (
    <Layout pageTitle={game.name}>
      <div>
        <h3>{game.releaseYear}</h3>
        <div dangerouslySetInnerHTML={{__html: game.description}} />
        <p>Canon?: {game.canon}</p>
        <div>
        <p>Featured Metal Gear: {game.featuredMetalGear.name}</p>
        <GatsbyImage image={image} alt="image not found."/>
        </div>
      </div>
    </Layout>
  )
}

export default GamePage