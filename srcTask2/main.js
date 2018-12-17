import React from "react";
import RangeSlider from "./rangeslider";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <RangeSlider />
      </div>
    );
  }
}
