import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import seedColors from "./seedColors";
import NavBar from "./NavBar";
export default class Palette extends Component {
  state = {
    level: 500
  };

  changeLevel = newLevel => {
    this.setState({
      level: newLevel
    });
  };

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div className="Palette">
        <NavBar level={level} changeLevel={this.changeLevel} />
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
