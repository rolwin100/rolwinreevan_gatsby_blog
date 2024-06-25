/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="en-US" {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <script>
            !function () {var reb2b = window.reb2b = window.reb2b || [];
            if (reb2b.invoked) return;reb2b.invoked = true;reb2b.methods = ["identify", "collect"];
            reb2b.factory = function (method) {return function () {var args = Array.prototype.slice.call(arguments);
    args.unshift(method);reb2b.push(args);return reb2b;};};
            for (var i = 0; i < reb2b.methods.length; i++) {var key = reb2b.methods[i];reb2b[key] = reb2b.factory(key);}
            reb2b.load = function (key) {var script = document.createElement("script");script.type = "text/javascript";script.async = true;
            script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/reb2b.js.gz";
            var first = document.getElementsByTagName("script")[0];
    first.parentNode.insertBefore(script, first);};
    reb2b.SNIPPET_VERSION = "1.0.1";reb2b.load("8XOE9GHDRDOM");}();
          </script>
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes} className="light">
          {this.props.preBodyComponents}
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
