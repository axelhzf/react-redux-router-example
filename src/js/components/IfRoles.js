import React, {PropTypes} from "react";
import ReactDom from "react-dom";
import {connect} from "react-redux";
import _ from "lodash";

class IfRoles extends React.Component {

  static propTypes = {
    roles: PropTypes.array.isRequired
  };

  render() {
    const {user, roles} = this.props;
    if (!user) return null;

    const userRoles = user.get("roles");

    const matchedRole = _.find(roles, (rol) => userRoles.contains(rol));
    if (!matchedRole) return null;
    return (
      <div>{this.props.children}</div>
    )
  }

}

const mapStateToProps = (state) => {
  return {user: state.user}
};

export default connect(mapStateToProps)(IfRoles);
