import React from "react";
import Messages from "./messages";
import List from "./list";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col-md-3 offset-1">
            <img src="logo_w.png" />
          </div>
          <div className="col-md-8">
            <nav>
              <ul>
                <li>
                  <a href="index.html">Home link</a>
                </li>
                <li>
                  <a href="https://pixelplex.io" target="blank">
                    pixelplex
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="row text-center">
          <Messages />
          <List />
        </div>
      </div>
    );
  }
}
