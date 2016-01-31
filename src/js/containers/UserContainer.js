import React from "react";
import ReactDom from "react-dom";
import {connect} from "react-redux";
import {Link} from "react-router";
import Breadcrumbs from "react-breadcrumbs";
import {push} from "react-router-redux";

class LoggedUserWrapper extends React.Component {

  componentDidMount() {
    this.checkUserIsLoggedIn(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.checkUserIsLoggedIn(nextProps);
  }

  checkUserIsLoggedIn(props) {
    const {user} = props;
    if (!user) {
      this.props.redirectToLogin();
    }
  }

  render() {
    const {user} = this.props;
    if (!user) return false;
    return (
      <div>
        <header className="main-header">
          <div className="logo">APP</div>
          <Breadcrumbs
            routes={this.props.routes}
            params={this.props.params}
            setDocumentTitle={true}
            separator=" / "
            displayMissing={false}
          />
          <div>Logged as {user.get("username")}. <Link to="/logout">Logout</Link></div>
        </header>

        <div className="content">
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

const mapDispatchToProps = (dispatch) => {
  return {
    redirectToLogin: () => dispatch(push("/login"))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedUserWrapper);