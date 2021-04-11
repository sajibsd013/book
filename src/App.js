import './App.css';
import React, { Component } from 'react';
import MainComponent from './Components/MainComponent';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  )
}


export default App;
