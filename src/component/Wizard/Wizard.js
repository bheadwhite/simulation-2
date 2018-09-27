import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addHouse} from './../../ducks/user'

class Wizard extends Component {
    constructor(props){
        super(props)
        this.state={
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
    }
    async handleSubmit(e){
        e.preventDefault()
        await this.props.addHouse(this.state).then().catch(e => console.log(e))
        this.props.history.push('/')

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
                <button type='submit' onClick={(e)=>this.handleSubmit(e)}>Complete</button>
            </form>
            
        </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        houses: state.houses
    }
}
const mapDispatchToProps = () => {
    return {
        addHouse
    }
}
export default connect(mapStateToProps, mapDispatchToProps())(Wizard)