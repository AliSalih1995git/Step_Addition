import React from "react";
import JSONPretty from "react-json-prettify";

function Output({ result }) {
  //   console.log(result, "setResult");
  return (
    <div className="output_container">
      <div className="output_screen">
        <JSONPretty json={result} />
      </div>
    </div>
  );
}

export default Output;
