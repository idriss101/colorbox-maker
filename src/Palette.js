import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import seedColors from "./seedColors";
import NavBar from "./NavBar";
export default class Palette extends Component {
  state = {
    level: 500,
    format: "hex"
  };

  changeLevel = newLevel => {
    this.setState({
      level: newLevel
    });
  };

  changeFormat = val => {
    this.setState({
      format: val
    });
  };

  render() {
    const { colors } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color[format]} name={color.name} />
    ));
    return (
      <div className="Palette">
        <NavBar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        {/* Navbar goes here */}
        <div className="Palette-colors">
          {/* Bunch of color boxes */}
          {colorBoxes}
        </div>
        {/* Footer */}
      </div>
    );
  }
}
