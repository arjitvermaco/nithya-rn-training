import React, { useContext } from 'react'
import BooksContext from '../context/BooksContext'

export default function CompE(props) {

  let bookContext = useContext(BooksContext)

  console.log(bookContext)

  return (
    <div>
      <h3>{bookContext.appName}</h3>

        {JSON.stringify(bookContext.bookData)}

        <button onClick={bookContext.handleButtonClick}>CLick me</button>

    </div>
  )
}
