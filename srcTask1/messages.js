import React from "react";
import { connect } from "react-redux";

import { addNewMessage } from "./actions";
import { bindActionCreators } from "redux";

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.flagForButton = true;
    this.classAddButton = "btn btn-secondary btn-sm float-right";
    this.state = {
      inputText: ""
    };
    this.getText = this.getText.bind(this);
    this.newMessage = this.newMessage.bind(this);
  }
  getText(e) {
    let text = e.target.value;
    this.setState({ inputText: text });
    if (text.trim()) {
      this.classAddButton = "btn btn-primary btn-sm float-right";
      this.flagForButton = false;
    } else {
      this.flagForButton = true;
      this.classAddButton = "btn btn-secondary btn-sm float-right";
    }
  }

  newMessage(message) {
    this.props.addNewMessage(message);
    this.setState({ inputText: "" });
    this.flagForButton = true;
    this.classAddButton = "btn btn-secondary btn-sm float-right";
  }

  render() {
    return (
      <div className="col-lg-4 offset-1 col-sm-10">
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
              disabled={this.flagForButton}
              id="btnAddAppoint"
              className={this.classAddButton}
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
