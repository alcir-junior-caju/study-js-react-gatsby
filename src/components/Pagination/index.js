import React from "react"
import propTypes from "prop-types"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import getThemeColor from "../../utils/getThemeColor"
import * as S from "./styles"

export default function Pagination({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) {
  return (
    <S.PaginationWrapper>
      {!isFirst && (
        <AniLink
          cover
          direction="left"
          bg={getThemeColor()}
          duration={0.6}
          to={prevPage}
        >
          Anterior
        </AniLink>
      )}
      <p>
        {currentPage} de {numPages}
      </p>
      {!isLast && (
        <AniLink
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
          to={nextPage}
        >
          Próxima
        </AniLink>
      )}
    </S.PaginationWrapper>
  )
}

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}
