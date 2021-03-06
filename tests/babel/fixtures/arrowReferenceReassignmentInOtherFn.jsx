// @flow

import * as React from "react";

(function() {
  let a = null;
  function other() {
    a = 1;
  }
  const shouldNotHoist = () => a;

  // Use in JSXExpressionContainer to enable hoisting
  <React.Component onClick={shouldNotHoist} />;

  other();

  return shouldNotHoist();
})();
