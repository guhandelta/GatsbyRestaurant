import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `react`, `restaurant`]} />
    <h3>Menu Page</h3>
  </Layout>
)

export default MenuPage
