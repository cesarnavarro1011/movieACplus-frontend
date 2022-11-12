import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import MovieAC from './movieAC+';
// import Session from './component/Session.jsx';

const Root = ReactDOM.createRoot(document.getElementById('root'));

Root.render(
  <React.StrictMode>
  <MovieAC/>
  {/* <Session/> */}
  </React.StrictMode>
);