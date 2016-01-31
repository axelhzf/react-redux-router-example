import React, {PropTypes} from "react";
import ReactDom from "react-dom";

export default class Button extends React.Component {

  static propTypes = {
    processing: PropTypes.bool,
    label: PropTypes.string.isRequired
  };

  render() {
    const {processing, label} = this.props;
    let spinner;
    if (processing) {
      spinner = <span className="fa fa-spin fa-circle-o-notch"/>
    }

    return (
      <button className="btn" disabled={processing}>
        {label}
        {spinner}
      </button>
    )
  }

}