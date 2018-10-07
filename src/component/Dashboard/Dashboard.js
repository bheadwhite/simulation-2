import React, { Component } from "react";
import House from "./../House/House";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getHouses } from "./../../ducks/user";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }
  updateHouses() {
    this.props.getHouses().then(resp => {
      this.setState({
        houses: resp.value.data
      });
    });
  }

  componentDidMount() {
    this.updateHouses();
  }

  render() {
    return (
      <div className="Dashboard">
        <div className="flexRow dash">
          <h1>Dashboard</h1>
            <Link to="/wizard">
              <button className="reg">Add New Property</button>
            </Link>
        </div>
        <div className='hr'>
          <hr />
        </div>
        <House
          houses={this.state.houses}
          updateHouses={() => this.updateHouses()}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    houses: state.houses
  };
};

const mapDispatchToProps = () => {
  return {
    getHouses
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(Dashboard);
