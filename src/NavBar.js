import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./styles/NavBarStyles";
import { IconButton } from "@material-ui/core";

class NavBar extends Component {
  state = {
    format: "hex",
    open: false
  };

  handleFormatChange = e => {
    this.setState({
      format: e.target.value,
      open: true
    });
    this.props.handleChange(e.target.value);
  };

  closeSnackBar = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const {
      level,
      changeLevel,
      handleFormatChange,
      showingAllColors
    } = this.props;
    const { format, open } = this.state;
    const { classes } = this.props;
    return (
      <header className={classes.NavBar}>
        <div className={classes.logo}>
          <Link to="/">reactcolorpicker</Link>
        </div>
        {showingAllColors && (
          <div className="slider-container">
            <span>Level: {level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                onAfterChange={changeLevel}
                step={100}
                trackStyle={{ backgroundColor: "transparent" }}
                railStyle={{ height: "8px" }}
                handleStyle={{
                  backgroundColor: "green ",
                  outline: "none",
                  border: "2px solid green",
                  boxShadow: "none",
                  width: "13px",
                  height: "13px",
                  marginLeft: "-7px",
                  marginTop: "-3px"
                }}
              />
            </div>
          </div>
        )}

        <div className={classes.selectContainer}>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0) </MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={open}
          autoHideDuration={3000}
          message={<span id="msg-id">Format Changed!</span>}
          ContentProps={{ "aria-describedby": "msg-id" }}
          onClose={this.closeSnackBar}
          action={[
            <IconButton
              onClick={this.closeSnackBar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    );
  }
}

export default withStyles(styles)(NavBar);
