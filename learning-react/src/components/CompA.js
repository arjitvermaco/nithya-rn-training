import React from 'react'
import CompC from './CompC'

export default function CompA(props) {
  return (
    <div>
      <h2>Component A</h2>
      <CompC bookData={props.bookData}/>
    </div>
  )
}
