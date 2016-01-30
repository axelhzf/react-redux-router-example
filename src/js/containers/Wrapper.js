import React from "react";
import ReactDom from "react-dom";
import DocumentTitle from "react-document-title";

export default (props) => {
  return (
    <DocumentTitle title="react-redux-router-example">
      <div>
        <h1>App!</h1>
        {props.children}
      </div>
    </DocumentTitle>
  )
}