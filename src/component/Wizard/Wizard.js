import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Wizard extends Component {
    constructor(){
        super()
        this.state={
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
    }
    render(){
        return (
        <div>
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
            </form>
            <Link to="/"><button>Cancel</button></Link>
        </div>
        )
    }
}