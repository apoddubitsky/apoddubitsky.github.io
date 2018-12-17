import React from "react";
import { connect } from "react-redux";
import { getInterval } from "./actions";
import { bindActionCreators } from "redux";
import ReactDom from "react-dom";

class RangeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.timer = 0;
    this.value = this.props.interval;

    this.state = {};

    this.changeValue = this.changeValue.bind(this);
    this.count = this.count.bind(this);
  }

  changeValue(e) {
    this.props.getInterval(e.target.value);
    this.value = e.target.value;
    this.count();
  }

  count() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    let span = ReactDom.findDOMNode(this.refs.id);
    span.textContent = 0;
    let counter = 0;
    let timerId = setInterval(() => {
      counter += this.props.interval;
      span.textContent = counter;
    }, this.value);
    this.timer = timerId;
  }

  componentDidMount() {
    this.count();
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <div className="slidecontainer">
            <div className="text-center">
              <h4>
                <span>
                  Сurrent step: <span>{this.value}</span>
                </span>
              </h4>
            </div>
            <input
              type="range"
              min="100"
              step="100"
              max="5000"
              className="slider"
              id="myRange"
              value={this.value}
              onChange={this.changeValue}
            />
          </div>

          <span>100</span>
          <span className="float-right">5000</span>
        </div>
        <div className="col-lg-6 col-sm-12 text-center">
          <h3>Counter:</h3>
          <span ref="id" />
          <span>ms</span>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { interval: state.interval };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getInterval: getInterval }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RangeSlider);
