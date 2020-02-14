import styled from "styled-components"
import Img from "gatsby-image"
import media from "styled-media-query"

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
  width: 3.75rem;
  height: 3.75rem;
  margin: auto;

  ${media.lessThan("large")`
    height: 1.875rem;
    width: 1.875rem;
  `}
`
