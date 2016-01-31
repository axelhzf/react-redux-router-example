import React from "react";
import ReactDom from "react-dom";
import {connect} from "react-redux";
import {Link} from "react-router";

class LoggedUserWrapper extends React.Component {

  render() {
    const {user} = this.props;
    if (!user) {
      return (
        <div>
          <p>You are not logged in.</p>
          <Link to="/login">Login</Link>
        </div>
      )
    }


    return (
      <div>
        <h1>Logged as {user.get("username")}. <Link to="/logout">Logout</Link></h1>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

export default connect(mapStateToProps)(LoggedUserWrapper);