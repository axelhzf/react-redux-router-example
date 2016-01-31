import React from "react";
import ReactDom from "react-dom";
import {Link} from "react-router";

export default () => {
  return (
    <div>
      <h1>Page 2</h1>
      <Link to="/page1">Go to page 1</Link>
    </div>
  )
}