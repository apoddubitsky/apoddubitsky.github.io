import React from "react";

export default class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <li className="list-group-item">
        <span>{this.props.title}</span>
        <button
          id="btnAddAppoint"
          className="btn btn-warning btn-sm float-right"
          onClick={() => {
            this.props.deleteMessage(this.props.index);
          }}
        >
          Delete text
        </button>
      </li>
    );
  }
}
