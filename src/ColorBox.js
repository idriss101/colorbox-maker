import React, { Component } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default class ColorBox extends Component {
  state = {
    copied: false
  };
  changeCopyState = () => {
    this.setState(
      {
        copied: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            copied: false
          });
        }, 1500);
      }
    );
  };
  render() {
    const { name, background } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className="ColorBox" style={{ background: background }}>
          <div
            className={`copy-overlay ${copied && "show"}`}
            style={{ background: background }}
          ></div>
          <div className={`copy-message ${copied && "show"}`}>
            <h1>Copied!</h1> <p>{this.props.background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <span className="see-more">More</span>
        </div>
      </CopyToClipboard>
    );
  }
}
