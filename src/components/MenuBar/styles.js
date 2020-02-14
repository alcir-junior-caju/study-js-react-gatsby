import styled from "styled-components"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"

export const MenuBarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  background: var(--mediumBackground);
  width: 3.75rem;
  height: 100vh;
  padding: 0.8rem 0;
  right: 0;
  border-left: 1px solid var(--borders);
  transition: background 0.5s;

  ${media.lessThan("large")`
    flex-direction: row;
    position: fixed;
    width: 100%;
    height: auto;
    bottom: 0;
    padding: 0;
    border-top: 1px solid var(--borders);
  `}
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan("large")`
    flex-direction: row;
  `}
`

export const MenuBarLink = styled(AniLink)`
  display: block;

  &.active {
    span {
      color: var(--highlight);
    }
  }
`

export const MenuBarItem = styled.span`
  display: block;
  position: relative;
  color: var(--texts);
  cursor: pointer;
  width: 3.75rem;
  height: 3.75rem;
  padding: 1.1rem;

  &:hover {
    color: var(--highlight);
  }

  &.light {
    color: #d4d400;

    &:hover {
      color: #e2e240;
    }
  }

  &.display {
    ${media.lessThan("large")`
      display: none;
    `}
  }
  ${media.greaterThan("large")`
    &:hover {
      color: var(--highlight);
    }
  `}
  ${media.lessThan("large")`
    height: 3.2rem;
    padding: .9rem;
    position: relative;
    width: 3.2rem;
  `}
`
