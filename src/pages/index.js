import * as React from "react"
import Layout from '../components/layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link } from 'gatsby'
import { header, headerInfo, headerPicture, headerTitle} from "../page.module.css"
import Header from "../components/header"

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
      <div>
        <h1>{homePage.featuredGames.title}</h1>
        <h2>{homePage.featuredGames.description}</h2>
        <div>
          {homePage.featuredGames.games.map(game => {
            const card = getImage(game.gameMeta.cover.localFile)
            return (
              <Link to={`artists/${game.slug}`}>
                <GatsbyImage image={card} alt="no image found"/>
                <div>
                  <p>{game.gameMeta.releaseYear}</p>
                  <p>{game.gameMeta.name}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
