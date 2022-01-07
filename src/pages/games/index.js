import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { hero, section, subtitle, games, description } from '../../page.module.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Game from '../../components/game'

export const query = graphql`
query {
    wpPage(slug: {eq: "gamespage"}) {
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
        <GatsbyImage className={hero}
            image={image}
            alt='no image found.'
        />
        <div className={section}>
          <div className={description}>
              <h2 className={subtitle}>{gamesPage.headerGames.title}</h2>
              <div dangerouslySetInnerHTML={{__html: gamesPage.headerGames.description,}}/>
          </div>
          <div className={games}>
              {gamesInfo.map(({node: game}) => {
                  return<Game slug={`${game.slug}/`} key={game.id} game={game}/>
              })}
          </div>
        </div>
    </Layout>
  )
}
export default GamesPage