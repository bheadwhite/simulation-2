import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addHouse, addMortgage, reset } from "./../../ducks/user";

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
    this.props.reset()
    this.props.history.push('/')
  }
  render() {
    return (
      <Fragment>
        <div className='flexRow wizHead'> <h1>Add New Listing</h1>
        <Link to="/">
          <button onClick={()=> {this.props.reset()}}>Cancel</button>
        </Link>
        </div>
        <form>
          <h3>Recommended rent: ${this.state.mortgage * 1.25}</h3>
          <div className='dataEntry'>
          <h3>
            Monthly Mortgage Amount
            </h3>
            <input
              type="text"
              onChange={e => {
                this.setState({ mortgage: e.target.value });
              }}
              value={this.state.mortgage}
            />
            <h3>
            Desired Monthly Rent
            </h3>
            <input
              type="text"
              onChange={e => {
                this.setState({ rent: e.target.value });
              }}
              value={this.state.rent}
            />
          </div>
          <div className='nextButton'>
          <Link to="step2">
            <button className='leftButton'
              onClick={() => {
                this.props.addMortgage(this.state);
              }}>
              Previous Step
            </button>
          </Link>
          <button id='completeButton' type="submit" onClick={e => this.handleSubmit(e)}>
            Complete
          </button>
          </div>
        </form>
      </Fragment>
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
    addMortgage,
    reset
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(StepThree);
