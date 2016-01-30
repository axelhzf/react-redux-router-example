import React from "react";
import ReactDom from "react-dom";

export default (props) => {
  return (
    <div>
      <h1>App!</h1>
      {props.children}
    </div>
  )
}