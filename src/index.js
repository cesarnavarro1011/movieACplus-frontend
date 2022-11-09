import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Head from './component/head';
import Front from './component/front';
import ListMovies from './component/listcard';

const Root = ReactDOM.createRoot(document.getElementById('root'));

Root.render(
  <React.StrictMode>
    <Head/>
    <Front/>
    <ListMovies/>
  </React.StrictMode>
);