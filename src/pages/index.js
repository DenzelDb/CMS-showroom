import * as React from "react"
import Layout from '../components/layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link } from 'gatsby'
import { header, headerInfo, headerPicture, headerTitle, section, subtitle, games} from "../page.module.css"
import Header from "../components/header"
import Game from "../components/game"

export const query = graphql`
query {
  wpPage(slug: {eq: "home"}) {
    homePage {
      featuredGames {
        games {
          ... on WpGame {
            id
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
          }
        }
        title
        description
      }
      headerHome {
        description
        title
        imageHomepage {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, width: 500, height: 500)
            }
          }
        }
      }
    }
  }
}
`

const HomePage = ({ data: {wpPage: { homePage }}}) => {
  const image = getImage(homePage.headerHome.imageHomepage.localFile)
  return (
    <Layout>
      <div className={header}>
        <div className={headerInfo}>
          <h1 className={headerTitle}>{homePage.headerHome.title}</h1>
          <div dangerouslySetInnerHTML={{__html: homePage.headerHome.description,}}/>
        </div>
        <div>
          <GatsbyImage className={headerPicture} image={image} alt="image not found."/>
        </div>
      </div>
      <div className={section}>
        <h1 className={subtitle}>{homePage.featuredGames.title}</h1>
        <h2>{homePage.featuredGames.description}</h2>
        <div className={games}>
          {homePage.featuredGames.games.map(game => (
            <Game slug={`games/${game.slug}`} key={game.id} game={game}/>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
