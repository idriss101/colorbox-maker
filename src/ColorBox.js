import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/ColorBoxStyles";

class ColorBox extends Component {
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
    const {
      name,
      background,
      paletteId,
      id,
      showingFullPalette,
      classes
    } = this.props;
    const { copied } = this.state;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className={classes.ColorBox} style={{ background: background }}>
          <div
            className={`${classes.copyOverlay} ${copied && "show"}`}
            style={{ background: background }}
          ></div>
          <div className={`${classes.copyMessage} ${copied && "show"}`}>
            <h1>Copied!</h1>{" "}
            <p className={classes.copyText}>{this.props.background}</p>
          </div>
          <div className="copy-container">
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={e => e.stopPropagation()}
            >
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
