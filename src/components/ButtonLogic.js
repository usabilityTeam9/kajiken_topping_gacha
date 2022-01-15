import React from "react";
import ReactDom from "react-dom";

export default function ButtonLogic() {
  return (
    <div>
      <button
        onClick={() => {
          console.log("Button clicked");
        }}
      >
        Click me
      </button>
    </div>
  );
}
