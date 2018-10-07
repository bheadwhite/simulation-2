import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addURL } from "./../../ducks/user";

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: this.props.url
    };
  }

  render() {
    return (
      <div>
        <div>Add New Listing</div>
        <Link to="/">
          <button>Cancel</button>
        </Link>
        <form>
          House URL:
          <input
            type="text"
            onChange={e => {
              this.setState({ img: e.target.value });
            }}
            value={this.state.img}
          />
          <Link to="/wizard">
            <button onClick={()=> {
                this.props.addURL(this.state.img)
            }}>Back</button>
          </Link>
          <Link to="step3">
            <button
              onClick={() => {
                this.props.addURL(this.state.img);
              }}
            >
              Next
            </button>
          </Link>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    url: state.url
  };
};
const mapDispatchToProps = () => {
  return {
    addURL
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(StepTwo);
