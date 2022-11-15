import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import MovieAC from './movieAC+';
import { BrowserRouter } from 'react-router-dom';

const Root = ReactDOM.createRoot(document.getElementById('root'));

Root.render(
  <BrowserRouter>
    <MovieAC/>
  </BrowserRouter>
);