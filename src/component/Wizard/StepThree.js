import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addHouse, addMortgage } from "./../../ducks/user";

class StepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rent: this.props.rent,
      mortgage: this.props.mortgage
    };
  }
  async handleSubmit(e) {
    e.preventDefault();
    await this.props.addMortgage(this.state);
    await this.props.addHouse(this.props.state).then().catch(e => console.log(e))
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <div>Add New Listing</div>
        <Link to="/">
          <button>Cancel</button>
        </Link>
        <form>
          <p>
            Monthly Mortgage Amount
            <input
              type="text"
              onChange={e => {
                this.setState({ mortgage: e.target.value });
              }}
              value={this.state.mortgage}
            />
          </p>
          <p>
            Desired Monthly Rent
            <input
              type="text"
              onChange={e => {
                this.setState({ rent: e.target.value });
              }}
              value={this.state.rent}
            />
          </p>
          <Link to="step2">
            <button
              onClick={() => {
                this.props.addMortgage(this.state);
              }}>
              back
            </button>
          </Link>
          <button type="submit" onClick={e => this.handleSubmit(e)}>
            Complete
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    mortgage: state.mortgage,
    rent: state.rent,
    state
  };
};
const mapDispatchToProps = () => {
  return {
    addHouse,
    addMortgage
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(StepThree);
