import React from 'react'
import CompD from './CompD'

export default function CompC(props) {
  return (
    <div>
        <h1>Component C</h1>
        <CompD bookData={props.bookData}/>
    </div>
  )
}
