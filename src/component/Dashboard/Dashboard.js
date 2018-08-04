import React, { Component } from 'react';
import House from './../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect } from 'react-redux'//redux
import {increaseAge} from './../../redux/user'//redux

class Dashboard extends Component {
componentDidMount(){
    this.update()
}

render(){
    return (
        <div>
            {
                this.state.houses.map((house, i) => {
                    return (
                        <div key={i}>
                            <h1>{house.propname}</h1>
                            <h4>{house.address}</h4>
                            <h5>{house.city},{house.state}</h5>
                        </div>)
                })
            }
            <Link to='/wizard'>
                <button>Add New Property</button>
                {/* <button onClick={()=>props.increaseUserAge()}>increase Age </button> */}
            </Link>
            <House />
        </div>
        )
    }
}
function mapStateToProps(state){//redux
    //********return an object that will be merged into your components props
    return {
    }
}

export default connect(mapStateToProps)(Dashboard)//redux


store > mapStateToProps> component >mapDispatchToProps> store