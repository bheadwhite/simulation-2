import React from 'react'
import { connect } from 'react-redux';
import { deleteHouse } from './../../ducks/user'

function House(props){
    return (
        <div className='Houses'>
        Home Listings
            {
                props.houses.map((house, i) => {
                    return (
                        <div key={i} className="House Listing">
                        <div>
                            <div>Property Name: {house.pname}</div>
                            <div>Address: {house.address}</div>
                            <div>City: {house.city}</div>
                            <div>State: {house.state}</div>
                            <div>Zip: {house.zip}</div>
                            </div>
                            <button onClick={async()=> {
                                await props.deleteHouse(house.id);
                                props.updateHouses()
                            }}
                                >X</button>
                        </div>
                    )
                })
            }

        </div>
    )
}

const dispatch = () => {
    return {
        deleteHouse
    }
}
export default connect(null, dispatch())(House)