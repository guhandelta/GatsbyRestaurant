import React from "react"
import { FaBitcoin } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `react`, `restaurant`]} />
    <h1>
      Hello from Gatsby <FaBitcoin />
    </h1>
  </Layout>
)

export default IndexPage
