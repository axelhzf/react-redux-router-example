import React from "react";
import ReactDom from "react-dom";
import {Link} from "react-router";
import {connect} from "react-redux";

class Page1 extends React.Component {

  render() {
    return (
      <div>
        <h1>Page 1</h1>
        <Link to="/page2">Go to page 2</Link>

        <div>Counter: {this.props.counter}</div>
        <button className="btn" onClick={this.props.increment}>Increment counter</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({type: "INCREMENT_COUNTER"})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Page1);