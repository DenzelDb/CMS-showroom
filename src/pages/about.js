import * as React from 'react'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const query = graphql`
query {
  wpPage(slug: {eq: "about"}) {
    aboutPage {
      headerAboutUs {
        description
        title
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100)
            }
          }
        }
      }
      mission {
        description
        title
        bannerPicture {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100)
            }
          }
        }
      }
    }
  }
}
`

const AboutPage = ({data: { wpPage: { aboutPage: {headerAboutUs, mission}}}}) => {
  const imageHeader = getImage(headerAboutUs.image.localFile)
  const imageMission = getImage(mission.bannerPicture.localFile)

  return (
    <Layout pageTitle="About Us">
      <div>
        <div>
          <h2>{headerAboutUs.title}</h2>
        </div>  
      </div> 
    </Layout>
  )
}

export default AboutPage