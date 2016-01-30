import React from "react";
import ReactDom from "react-dom";
import {Link} from "react-router";
import DocumentTitle from "react-document-title";

export default () => {
  return (
    <DocumentTitle title="Page1">
      <div>
        <h1>Page 1</h1>
        <Link to="/page2">Go to page 2</Link>
      </div>
    </DocumentTitle>
  )
}