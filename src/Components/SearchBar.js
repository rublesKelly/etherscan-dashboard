import axios from 'axios';
import React, {useState} from 'react'
import Web3 from "web3-eth";


function SearchBar(props) {

//Set State
const [ethAddress, setEthAddress] = useState('')
const [URL, setURL] = useState('')

// Conditional logic to run something if eth address is valid 
// 

//onChangeHandler is this needed at all?
const onChangeHandler = (e) => {
    console.log(e.target.value);
    e.stopPropagation();

}

//onSubmitHandler
const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log(e.target.value);
    // Web3.utils.isAddress(e.target.value) ? setEthAddress(e.target.value) : alert('not a valid address')
}

// //UseEffect to update dashboard


    return (
        <div id='search-bar'>
            <form onSubmit={onSubmitHandler}>
                <label>Enter an Eth Address</label>
                <input type='input'
                       id='search-bar'
                       placeholder='0x..5h5d'
                       onChange={onChangeHandler}
                ></input>  
            </form>
        </div>
    )
}

export default SearchBar
            
