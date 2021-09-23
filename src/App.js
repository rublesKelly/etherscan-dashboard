//Imports 
import './App.css';
import React,{ useState, useEffect } from "react";
import axios  from "axios";

//Component Imports
import DashBoard from './Components/DashBoard';
import SearchBar from './Components/SearchBar';
import SideBar from './Components/SideBar';

function App() {

  //Declare state
  const [addresses, setAddresses] = useState([])
  const [showSideBar, setShowSideBar] = useState(true)

  //Fuinctions
  const addAddress = ({publicKey, name}) => {
    //Get address .then(res=>{})
    const updateAddress = [...addresses, {name: name, publicKey: publicKey}]
    setAddresses(updateAddress)
  }

  return (
    <div className="App">
      {/* This is a temporary search bar till the side bar is in */}
      {showSideBar && <SideBar addresses={addresses} addAddress={addAddress}/>}
      <SearchBar/> 
      <DashBoard/>
    </div>
  );
}

export default App;
