import React from 'react';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Header from './components/Header/index';
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";


//styles
import {GlobalStyle}from "./Globalstyle";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:movieId' element={<Movie/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      <GlobalStyle/>

    </Router>
  
  );
}

export default App;
