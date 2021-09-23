import React, {useState} from 'react'
import eth from "web3-eth";
var eth = require('web3-eth');

function AddAddressForm({addAddress}) {
        
    //Declare state 
    const [addresss, setAddresss] = useState({
        name: '',
        publicKey: '',    
    })

    //Functions
    const onChangeHandler = (e) => {
        console.log('changeHandler')
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(e)
        addAddress(addresss)
    }
    
    return (
        <div id='add-address-form'>
            <form onSubmit={onSubmitHandler}>
                <label>Enter an Eth Address</label>
                <input 
                    type='input'
                    name='publicKey'
                    id='side-bar-add-address'
                    placeholder='0x..5h5d'
                    onChange={e => setAddresss(value => ({...value, [e.target.name]: e.target.value}), console.log(addresss))}
                    onBlur={e => eth.utils.isAddress(e.target.value) ? console.log('yes'): console.log('no')}
                    // onBlur={e => console.log(e.target.value)}
                />
                <br />
                <label htmlFor="name">Enter a nickname  for address</label> 
                <input 
                    type="text"
                    name='name'
                    id='side-bar-add-name'
                    onChange={e => setAddresss(value => ({...value, [e.target.name]: e.target.value}))} 
                /> 
                <button type="submit" onClick={onSubmitHandler}>Submit</button>
            </form>
        </div>
    )
}

export default AddAddressForm
