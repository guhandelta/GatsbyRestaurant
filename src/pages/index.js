import React from "react"
import { FaBitcoin } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      Hello from Gatsby <FaBitcoin />
    </h1>
    <ButtonWrapper>Click Me!</ButtonWrapper>
  </Layout>
)

const ButtonWrapper = styled.button`
  background: Aquamarine;
  color: #fff;
`
export default IndexPage
