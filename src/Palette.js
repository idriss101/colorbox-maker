import React, { Component } from "react";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import NavBar from "./NavBar";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/PaletteStyles";

class Palette extends Component {
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
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        id={color.id}
        paletteId={id}
        showingFullPalette
      />
    ));
    return (
      <div className={classes.Palette}>
        <NavBar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showingAllColors
        />
        <div className={classes.colors}>{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
