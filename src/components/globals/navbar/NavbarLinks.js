import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../../utils"

export default class Navbar extends Component {
  state = {
    // The links are held in a state is to make adding/deleting any links much easier, without any hardcoding
    links: [
      {
        id: 0,
        path: "/",
        name: "Home",
      },
      {
        id: 1,
        path: "/about/",
        name: "About",
      },
      {
        id: 2,
        path: "/menu/",
        name: "Menu",
      },
      {
        id: 3,
        path: "/contact/",
        name: "Contact",
      },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {this.state.links.map(link => {
          return (
            <li key={link.id}>
              <Link to={link.pah} className="nav-link">
                {link.name}
              </Link>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul``
