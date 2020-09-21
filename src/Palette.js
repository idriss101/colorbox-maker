import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import seedColors from "./seedColors";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

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
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            onAfterChange={this.changeLevel}
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
