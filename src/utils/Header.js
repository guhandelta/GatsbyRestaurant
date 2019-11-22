import React from "react"
import styled from "styled-components"
import img from "../images/bcg/homeBcg.jpeg"

function HomeHeader({ img, children }) {
  return <IndexHeader img={img}>{children}</IndexHeader>
}

const IndexHeader = styled.header`
  min-height: calc(100vh - 54.8px);
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.img}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
` // The props used here are renderProps and not normal props, as it would be a different procedure to use normal props here
// min-height -> calc => total height - navbar height => the image starts after the navbar
//  center/cover fixed no-repeat => bg-position/bg-size bg-attachement bg-repeat

HomeHeader.defaultProps = { // Default Props => To prevent any import issues on the respective pages, from not displaying the bg mg
  img: img,
}

export { HomeHeader } // Destructuring is done here as multiple components will be expoerted from this file
