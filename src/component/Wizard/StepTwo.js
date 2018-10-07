import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addURL, reset} from "./../../ducks/user";

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: this.props.url
    };
  }

  render() {
    return (
      <Fragment>
        <div className="flexRow wizHead"><h1>Add New Listing</h1>
        <Link to="/">
          <button onClick={()=> {this.props.reset()}}>Cancel</button>
        </Link>
        </div>
        <form>
        <div className='dataEntry urlSpace'>
          <h3>Image URL</h3>
          <input
            className="fullInput"
            type="text"
            onChange={e => {
              this.setState({ img: e.target.value });
            }}
            value={this.state.img}
          />
          </div>
          <div className="nextButton">
          <Link to="/wizard">
            <button className='leftButton' onClick={()=> {
                this.props.addURL(this.state.img)
              }}>Previous Step</button>
          </Link>
          <Link to="step3">
            <button type='submit'
              onClick={() => {
                this.props.addURL(this.state.img);
              }}
            >
              Next Step
            </button>
          </Link>
          </div>
        </form>
      </Fragment>
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
    addURL,
    reset
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(StepTwo);
