import React from 'react'

export default function Books(props) {
    let {book} = props
  return (
    <div>
        {book.title} | {book.author} | {book.year}
    </div>
  )
}
