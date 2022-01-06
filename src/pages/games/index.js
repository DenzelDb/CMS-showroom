import * as React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Game from '../../components/game'

export const query = graphql`
query {
    wpPage(slug: {eq: "games"}) {
        gamesPage {
          headerGames {
            description
            title
            image {
              localFile {
                childImageSharp {
                   gatsbyImageData(placeholder: BLURRED, quality: 100, layout: FULL_WIDTH)
                  }
                }
              }
            }
          }
        }
  
    allWpGame {
      edges {
        node {
          gameMeta {
            name
            releaseYear
            cover {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, transformOptions: {fit: CONTAIN})
                }
              }
            }
          }
          slug
          id
        }
      }
    }
  }
`

const GamesPage = ({data: {allWpGame: {edges: gamesInfo}, wpPage: {gamesPage},},}) => {
    const image = getImage(gamesPage.headerGames.image.localFile)
  return (
    <Layout pageTitle="Games of MGS showroom">
        <GatsbyImage
            image={image}
            alt='no image found.'
        />
        <div>
            <h2>{gamesPage.headerGames.title}</h2>
            <div dangerouslySetInnerHTML={{__html: gamesPage.headerGames.description,}}/>
        </div>
            {gamesInfo.map(({node: game}) => {
                <Game slug={`games/${game.slug}`} key={game.id} game={game}/>
            })}
    </Layout>
  )
}
export default GamesPage