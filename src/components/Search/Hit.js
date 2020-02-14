import React from "react"
import PostItem from "../PostItem"

export default function Hit({ hit }) {
  const {
    fields: { slug },
    title,
    date,
    description,
    category,
    background,
    timeToRead,
  } = hit

  return (
    <PostItem
      slug={slug}
      title={title}
      date={date}
      description={description}
      category={category}
      background={background}
      timeToRead={timeToRead}
    />
  )
}
