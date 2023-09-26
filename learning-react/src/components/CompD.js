import React from 'react'
import CompE from './CompE'

export default function CompD(props) {
  return (
    <div>
        <h2>Component D</h2>
        <CompE bookData={props.bookData}/>
    </div>
  )
}
