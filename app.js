import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1> Hello title</h1>;

const Heading = () => (
  <div>
    <Title />
    <h1>Hello React</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);
