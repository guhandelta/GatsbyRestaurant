import React, { Component } from "react"
import NavbarHeader from "./NavbarHeader"
import NavbarIcons from "./NavbarIcons"
import NavbarLinks from "./NavbarLinks"

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <NavbarHeader />
        <NavbarIcons />
        <NavbarLinks />
      </nav>
    )
  }
}
