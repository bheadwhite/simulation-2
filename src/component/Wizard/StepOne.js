import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addAddress} from './../../ducks/user'

class StepOne extends Component {
    constructor(props){
        super(props)
        this.state={
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zipcode: this.props.zipcode
        }
    }


render(){
    return (
    <div>
        <div>Add New Listing</div><Link to="/"><button>Cancel</button></Link>
        <form>
            Name:
            <input type='text' onChange={(e)=>{this.setState({name: e.target.value})}} value={this.state.name}></input>
            Address:
            <input type='text' onChange={(e)=>{this.setState({address: e.target.value})}} value={this.state.address}></input>
            City:
            <input type='text' onChange={(e)=>{this.setState({city: e.target.value})}} value={this.state.city}></input>
            State:
            <input type='text' onChange={(e)=>{this.setState({state: e.target.value})}} value={this.state.state}></input>
            Zipcode:
            <input type='text' onChange={(e)=>{this.setState({zipcode: e.target.value})}} value={this.state.zipcode}></input>
            <Link to="/wizard/step2"><button onClick={() => {this.props.addAddress(this.state)}} >Next Step</button></Link>
        </form>
        
    </div>
    )
}
}
const mapStateToProps = (state) => {
return {
    name: state.name,
    address: state.address,
    city: state.city,
    state: state.state,
    zipcode: state.zipcode
}
}
const mapDispatchToProps = () => {
return {
    addAddress
}
}
export default connect(mapStateToProps, mapDispatchToProps())(StepOne)