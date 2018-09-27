import React, { Component } from "react";
import House from "./../House/House";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getHouses } from "./../../ducks/user";

class Dashboard extends Component {
  constructor(){
    super()
    this.state={
      houses: []
    }
  }
  updateHouses(){
    this.props.getHouses().then(resp => {
      this.setState({
        houses: resp.value.data
      })
    })
  }

  componentDidMount() {
    this.updateHouses()
  }

  render() {
    return (
      <div>
        <div>
          <Link to="/wizard">
            <button>Add New Property</button>
          </Link>
        </div>
        <House houses={this.state.houses} updateHouses={()=>this.updateHouses()} />
      </div>
    );
  }
}


const mapDispatchToProps = () => {
  return {
    getHouses
  };
};
export default connect(null,
  mapDispatchToProps()
)(Dashboard)
