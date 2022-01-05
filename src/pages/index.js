import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'

const HomePage = ({ data }) => {
  return (
    <Layout pageTitle="Welcome to Metal Gear Showroom">
    <p>Lorem ipsum</p>
    <StaticImage alt="randomized unsplash image!"
        src="https://source.unsplash.com/random/800x600"/>
    </Layout>
  )
}

export default HomePage
