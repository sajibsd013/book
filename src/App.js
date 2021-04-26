import './App.css';
import React from 'react';
import MainComponent from './Components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import myStore from './redux/store';


const App = () => {
  return (
    <Provider store={myStore}>
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </Provider>
  )
}


export default App;
