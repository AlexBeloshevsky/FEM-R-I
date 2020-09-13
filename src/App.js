import React from "react";
import { render } from "react-dom";
import pet from "./pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(pet, { name: "Spark", animal: "Dog", breed: "Husky" }),
    React.createElement(pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(pet, { name: "Doink", animal: "Cat", breed: "Mixed" }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
