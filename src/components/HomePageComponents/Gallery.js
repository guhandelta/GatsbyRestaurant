import React from "react"
import styled from "styled-components"
import { styles, Section } from "../../utils"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const query = graphql`
  {
    img1: file(relativePath: { eq: "homeGallery/img-1.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default function Gallery() {
  return (
    <StaticQuery
      query={graphql`
        {
          img1: file(relativePath: { eq: "homeGallery/img-1.jpeg" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => <Img fluid={data.img1.childImageSharp.fluid} />}
    />
  )
}
