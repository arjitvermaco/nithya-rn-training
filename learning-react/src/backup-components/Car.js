import React from 'react'

export default function Car(props) {
    let {car} = props
  return (
            <div
            key={car.name}
            style={{ border: "1px solid black", padding: "10px" }}
          >
            <p>Car Name : {car.name}</p>
            <p>Car Brand : {car.brand}</p>
            <p>Price : {car.price}</p>
          </div>
  )
}
