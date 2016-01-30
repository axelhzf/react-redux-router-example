import React from "react";
import ReactDom from "react-dom";
import {Link} from "react-router";

export default () => {
  return (
    <div>
      <h1>Page 1</h1>
      <Link to="/page2">Go to page 2</Link>
    </div>
  )
}