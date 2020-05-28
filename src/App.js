import React, { Component } from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolButton/CoolButton";
import { render } from "react-dom";
import "bulma/css/bulma.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField label="phone" type="number" placeholder="12345" />
      </div>
    );
  }
}

export default App;
