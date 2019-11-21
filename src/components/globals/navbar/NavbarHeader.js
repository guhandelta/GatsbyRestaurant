import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../../images/logo_e.svg"
import { FaAlignRight } from "react-icons/fa"
import styled from "styled-components"

export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <img src={logo} alt="உணவகம்" />
        </Link>
        <FaAlignRight
          className="toggle-icon"
          onClick={() => {
            handleNavbar()
          }}
        ></FaAlignRight>
        {/* The method received down throuh the props will be passed to this class here, as this is where the state is affected,-
        - in the navbar component, when clicking on this icon, which inturn affects the links */}
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
  .toggle-icon {
    font-size: 1.75rem;
    color: coral;
    cursor: pointer;
  }
  @media (min-width:768){
    .toggle-icon {
      display: none;
    }
  }
`
