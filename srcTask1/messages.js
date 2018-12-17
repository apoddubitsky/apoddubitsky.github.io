import React from "react";
import { connect } from "react-redux";

import { addNewMessage } from "./actions";
import { bindActionCreators } from "redux";

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
    this.getText = this.getText.bind(this);
    this.newMessage = this.newMessage.bind(this);
  }
  getText(e) {
    let text = e.target.value;
    this.setState({ inputText: text });
  }

  newMessage(message) {
    this.props.addNewMessage(message);
    this.setState({ inputText: "" });
  }

  render() {
    return (
      <div className="col-md-4 offset-1">
        <form
          onSubmit={e => {
            e.preventDefault();
            this.newMessage(this.state.inputText);
          }}
        >
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Enter text"
            onChange={this.getText}
            value={this.state.inputText}
          />
        </form>
        <div className="form-group row">
          <label className="col-sm-12  col-form-label-sm">
            <button
              id="btnAddAppoint"
              className="btn btn-primary btn-sm float-right"
              onClick={() => {
                this.newMessage(this.state.inputText);
              }}
            >
              Add text
            </button>
          </label>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { messages: state.messages };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addNewMessage: addNewMessage }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);