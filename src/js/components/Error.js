import React, {PropTypes} from "react";
import ReactDom from "react-dom";

export default class Error extends React.Component {

  static propTypes = {
    error: PropTypes.string
  };

  render() {
    const {error} = this.props;
    if (!error) return null;
    return <div className="error">{error}</div>
  }

}