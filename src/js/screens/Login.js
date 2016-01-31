import React, {PropTypes} from "react";
import ReactDom from "react-dom";
import {connect} from "react-redux";
import {login} from "../actions/actions";

import Error from "../components/Error";
import Button from "../components/Button";

class Login extends React.Component {

  static propTypes = {

    //connect
    processing: PropTypes.bool,
    error: PropTypes.string
  };

  state = {
    username: "",
    password: ""
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.props.processing) return;

    const {username, password} = this.state;
    this.props.login(username, password);
  };

  onChangeUsername = (e) => {
    this.setState({username: e.target.value});
  };

  onChangePassword = (e) => {
    this.setState({password: e.target.value});
  };

  render() {
    const {error, processing} = this.props;
    return (
      <div className="login">
        <h1>App</h1>

        <form onSubmit={this.onSubmit}>
          <Error error={error}/>
          <input type="text" placeholder="username" value={this.state.username} onChange={this.onChangeUsername}/>
          <input type="password" placeholder="password" value={this.state.password} onChange={this.onChangePassword}/>
          <Button processing={processing} label="Login"/>
        </form>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    processing: state.loginForm.get("processing"),
    error: state.loginForm.get("error")
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(login(username, password))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);