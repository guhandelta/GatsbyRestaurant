import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner } from "../utils"
import img from "../images/bcg/homeBcg.jpeg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `react`, `restaurant`]} />
    <HomeHeader img={img}>
      <Banner
        title="உணவகம்"
        subtitle="No 6 - Vivekanandhar Street, Dubai Main Road, Dubai"
      ></Banner>
    </HomeHeader>
  </Layout>
)

export default IndexPage
