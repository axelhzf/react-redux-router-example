import React from "react";
import ReactDom from "react-dom";
import {Link} from "react-router";
import DocumentTitle from "react-document-title";

export default () => {
  return (
    <DocumentTitle title="Page 2">
      <div>
        <h1>Page 2</h1>
        <Link to="/page1">Go to page 1</Link>
      </div>
    </DocumentTitle>
  )
}