import React, { Component } from "react"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../utils"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="Let me tell you about" title="Out Mission" />
        <QuickInfoWapper>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            officiis dolorum optio doloremque numquam nesciunt eos eveniet
            architecto quaerat ipsum natus omnis exercitationem quas aperiam
            veritatis asperiores, quia aut cum.
          </p>
          <Link to="/about/" style={{ textDecoration: "none" }}>
            About
          </Link>
        </QuickInfoWapper>
        <SectionButton style={{ margin: "2rem auto" }}>About</SectionButton>
      </Section>
    )
  }
}

const QuickInfoWapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
