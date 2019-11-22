import styled from "styled-components"
import { styles } from "../utils"

const BannerButton = styled.button`
  display: block;
  color: ${styles.colors.mainWhite};
  background: transparent;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-weight: 700;
  border: 0.5px solid rgba(255, 255, 255, 0.4);
  margin-bottom: 1rem;
  ${styles.transition({})};
  &:hover {
    background: ${styles.colors.mainWhite};
    color: ${styles.colors.mainBlack};
    border: none;
    margin: 0.5px auto;
    cursor: pointer;
  }
`

export { BannerButton }
