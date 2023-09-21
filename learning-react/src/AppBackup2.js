import React from "react";
import Books from "./Books";
import Car from "./Car";
import carData from "./CarData";
import booksData from "./static/BooksData";

export default function App() {
  console.log(carData);

  return (
    <div>
      {carData.map((car) => (
        <Car car={car} />
      ))}

      {booksData.map(book=><Books book={book}/>)}
    </div>
  );
}
