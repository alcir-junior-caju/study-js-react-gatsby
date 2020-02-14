import React from "react"
import PropTypes from "prop-types"

import getThemeColor from "../../utils/getThemeColor"
import * as S from "./styles"

export default function PostItem({
  background,
  slug,
  category,
  date,
  timeToRead,
  title,
  description,
}) {
  return (
    <S.PostItemLink
      cover
      direction="right"
      bg={getThemeColor()}
      duration={0.6}
      to={slug}
    >
      <S.PostItemWrapper>
        <S.PostItemTag background={background}>{category}</S.PostItemTag>
        <S.PostItemInfo>
          <S.PostItemDate>
            {date} - {timeToRead} min de leitura
          </S.PostItemDate>
          <S.PostItemTitle>{title}</S.PostItemTitle>
          <S.PostItemDescription>{description}</S.PostItemDescription>
        </S.PostItemInfo>
      </S.PostItemWrapper>
    </S.PostItemLink>
  )
}

PostItem.propTypes = {
  background: PropTypes.string,
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
