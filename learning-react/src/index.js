import React from 'react';
import ReactDOM from 'react-dom/client';
//Import the component
import App from './App'
import GithubUserData from './GithubUserData';
import GithubUsers from './GithubUsers';

//Selecting the root and creating the DOM
const root = ReactDOM.createRoot(document.getElementById('root'))
//Render the root
root.render(
   <GithubUserData/>
)
