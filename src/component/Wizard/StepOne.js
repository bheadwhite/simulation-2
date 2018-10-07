import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addAddress, reset} from './../../ducks/user'

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
    <Fragment>
        <div className="flexRow wizHead"><h1>Add New Listing</h1><Link to="/"><button onClick={()=>this.props.reset()}>Cancel</button></Link></div>
        <div className="dataEntry">
            <form>
            <h3>Property Name</h3>
            <input type='text' onChange={(e)=>{this.setState({name: e.target.value})}} value={this.state.name}></input>
            <h3>Address</h3>
            <input className='addressInput' type='text' onChange={(e)=>{this.setState({address: e.target.value})}} value={this.state.address}></input>
            <div className='cityDiv'>
            <div><h3>City</h3>
            <input type='text' onChange={(e)=>{this.setState({city: e.target.value})}} value={this.state.city}></input></div>
            <div><h3>State</h3>
            <input type='text' onChange={(e)=>{this.setState({state: e.target.value})}} value={this.state.state}></input></div>
            <div><h3>Zip</h3>
            <input type='text' onChange={(e)=>{this.setState({zipcode: e.target.value})}} value={this.state.zipcode}></input></div>
            </div>
        </form>
        </div>
        <div className='nextButton'>
        <div></div>

        <Link to="/wizard/step2"><button className="firstStep" onClick={() => {this.props.addAddress(this.state)}} >Next Step</button></Link>
        </div>
        
    </Fragment>
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
    addAddress,
    reset
}
}
export default connect(mapStateToProps, mapDispatchToProps())(StepOne)