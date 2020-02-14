import React from "react"
import { useStaticQuery /* , StaticQuery */, graphql } from "gatsby"

import getThemeColor from "../../utils/getThemeColor"
import * as S from "./styles"
import Avatar from "../Avatar/index"

export default function Profile() {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
        to="/"
      >
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>

    // <StaticQuery
    //   query={graphql`
    //     query MySiteMetadata {
    //       site {
    //         siteMetadata {
    //           title
    //           description
    //           position
    //         }
    //       }
    //     }
    //   `}
    //   render={({
    //     site: {
    //       siteMetadata: { title, position, description },
    //     },
    //   }) => (
    //     <div className="Profile-wrapper">
    //       <h1>{title}</h1>
    //       <h3>{position}</h3>
    //       <p>{description}</p>
    //     </div>
    //   )}
    // />
  )
}
