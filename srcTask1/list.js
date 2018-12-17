import React from "react";
import { connect } from "react-redux";
import Item from "./item";
import { getMessagesAfterDel } from "./actions";
import { bindActionCreators } from "redux";
import Uuid from "node-uuid";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.deleteMessage = this.deleteMessage.bind(this);
  }

  deleteMessage(index) {
    let newArr = [...this.props.allMessages];
    newArr.splice(index, 1);
    this.props.getMessagesAfterDel(newArr);
  }
  render() {
    let messages;
    messages = this.props.allMessages.map((item, i) => {
      return (
        <Item
          key={Uuid.v1()}
          title={item}
          deleteMessage={this.deleteMessage}
          index={i}
        />
      );
    });

    return (
      <div className="col-lg-4 offset-1 col-sm-10">
        <ul className="list-group">{messages}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { allMessages: state.messages };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getMessagesAfterDel: getMessagesAfterDel },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
