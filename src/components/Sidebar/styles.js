import styled from "styled-components"
import media from "styled-media-query"

export const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  height: 100vh;
  position: fixed;
  background: var(--mediumBackground);
  padding: 2rem;
  border-right: 1px solid var(--borders);
  text-align: center;

  ${media.lessThan("large")`
    align-items: flex-start;
    padding: 1rem 2rem;
    width: 100%;
    height: auto;
  `}
`
