import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import smartHomeData from './smartHomeData';
import Header from './components/header';
import Dashboard from './components/dashboard';


const App = () => {
  return(
  <div className="container">
    <Header title="Chytrý dům"/>
    <Dashboard data={smartHomeData}/>
   
  </div>
)};

createRoot(
  document.querySelector('#app'),
).render(<App />);