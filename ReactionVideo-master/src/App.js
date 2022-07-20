import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Router from './Route';
import Content from './Content'
import Navbar from './Components/SideMenu';
import Nav from './Components/Nav';
import Draw from './Components/Draw';

export default function App() {
  return (
 <div className="App">
  {/* <Nav /> */}
    {/* <Navbar/>
      <Router/>
      <Content/> */}
      <Draw/>
  </div>   
  );
} 