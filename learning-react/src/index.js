import React from 'react';
import ReactDOM from 'react-dom/client';
//Import the component
import App from './App'
import { BooksProvider } from './context/BooksProvider';


//Selecting the root and creating the DOM
const root = ReactDOM.createRoot(document.getElementById('root'))
//Render the root
root.render(
  
   <BooksProvider>
      <App/>
   </BooksProvider>

)
