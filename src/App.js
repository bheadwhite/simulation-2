import React, { Component } from 'react';
import Header from './component/Header/Header'
import routes from './routes'
import axios from 'axios'
import './App.css';
import {createStore } from 'redux'

class App extends Component {
  constructor(){
    super()
    this.state={
      houses: []
    }
  }
  componentDidMount(){
    this.update()
  }
  update(){
    axios.get('http://localhost:3001/api/houses').then(res => {this.setState({houses: res.data});console.log(this.state)})
  }
  render() {
    return (
      <div className="App">
      <Header />
      { routes }
      </div>
    );
  }
}

export default App;