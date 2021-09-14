//Imports 
import './App.css';
import React,{ useState, useEffect } from "react";
import axios  from "axios";
//Component Imports
import DashBoard from './Components/DashBoard';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <div className="App">
      {/* This is a temporary search bar till the side bar is in */}
      <SearchBar/> 
      <DashBoard/>
    </div>
  );
}

export default App;
