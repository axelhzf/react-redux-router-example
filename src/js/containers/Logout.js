import React from "react";
import ReactDom from "react-dom";
import {connect} from "react-redux";
import {logout} from "../actions/actions";

class Logout extends React.Component {

  componentDidMount() {
    this.props.logout();
  }

  render() {
    return <p>Redirecting to login...</p>;
  }

}

const mapStateToProps = () => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);