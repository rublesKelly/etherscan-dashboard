import React from 'react'
import AddAddressForm from './AddAddressForm'

function SideBar({addresses, addAddress}) {

    return (
        <div id='side-bar'>
            <h1>SideBar</h1>
            <AddAddressForm addAddress={addAddress}/>
            {addresses.map(address=>{
                <ul>
                    <li>
                        <a> 
                            <h6>{address.name}</h6>
                        </a>
                    </li>
                </ul>
            })}
        </div>
    )
}

export default SideBar
