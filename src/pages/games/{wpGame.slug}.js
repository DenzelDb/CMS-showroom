import * as React from 'react'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { header, headerInfo, year, gamePicture, metalGear, headerTitle, gameInfo, platforms, headerPicture, gameName, gameDescription, gamePictures } from '../../page.module.css'
import { graphql } from 'gatsby'

export const query = graphql`
query ($id: String) {
  wpGame(id: {eq: $id}) {
    gameMeta {
      canon
      description
      name
      releaseYear
      year
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
      gameImages {
        image1 {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        image2 {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        image3 {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
    platforms {
      nodes {
        name
      }
    }
  }
}
`

const GamePage = ({data: { wpGame: {gameMeta: game, platforms: { nodes: platforms },},},}) => {
  const image = getImage(game.featuredMetalGear.image.localFile)
  const image1 = getImage(game.gameImages.image1.localFile)
  const image2 = getImage(game.gameImages.image2.localFile)
  const image3 = getImage(game.gameImages.image3.localFile)
  return (
    <Layout>
      <div className={header}>
        <div className={headerInfo}>
          <h3 className={year}>{game.year}</h3>
          <div className={platforms}>
              {platforms.map((platform, i) => (
                  <span>
                    {platform.name} {i + 1 < platforms.length && "- "}
                  </span>
              ))}
          </div> 
          <h1 className={headerTitle}>{game.name}</h1>
          <p><span className={gameInfo}>Featured Metal Gear:</span> {game.featuredMetalGear.name}</p>
        </div>
        <div>
          
          <GatsbyImage className={metalGear} image={image} alt="image not found."/>
        </div>  
      </div>
      <div className={gameDescription} dangerouslySetInnerHTML={{__html: game.description}} />
        <div>
          <p><span className={gameInfo}>Canon: </span>{game.canon}</p>
          <p><span className={gameInfo}>Year of release:</span> {game.releaseYear}</p>
        </div>
        <div className={gamePictures}>
          <GatsbyImage className={gamePicture} image={image1} alt="no image found"/>
          <GatsbyImage className={gamePicture} image={image2} alt="no image found"/>
          <GatsbyImage className={gamePicture} image={image3} alt="no image found"/>
        </div>
    </Layout>
  )
}

export default GamePage