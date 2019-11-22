import React, { Component } from "react"
import { Section, Title, SectionButton } from "../../utils"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="Let me tell you about" title="Out Mission" />
        <SectionButton>About</SectionButton>
      </Section>
    )
  }
}
