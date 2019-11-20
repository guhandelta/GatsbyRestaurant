import React, { Component } from "react"
import NavbarHeader from "./NavbarHeader"
import NavbarIcons from "./NavbarIcons"
import NavbarLinks from "./NavbarLinks"
import styled from "styled-components"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
  }
  handleNavbar = () => {
    this.setState(() => {
      return { navbarOpen: !this.state.navbarOpen }
    })
  }
  render() {
    return (
      <NavWrapper>
        <p>Test Content from Navbar</p>
        <NavbarHeader handleNavbar={this.handleNavbar} />
        <NavbarIcons navbarOpen={this.state.navbarOpen} />
        <NavbarLinks />
      </NavWrapper>
    )
  }
}
const NavWrapper = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`
