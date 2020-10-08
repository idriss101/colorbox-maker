import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";

export default class App extends Component {
  state = {
    palettes: seedColors
  };

  findPalette = id => {
    return this.state.palettes.find(palette => {
      return palette.id === id;
    });
  };

  savePalette = newPalette => {
    this.setState(st => ({
      palettes: [...st.palettes, newPalette]
    }));
  };

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={routeProps => (
            <NewPaletteForm {...routeProps} savePalette={this.savePalette} />
          )}
        />
        <Route
          exact
          path="/"
          render={routeProps => (
            <PaletteList palettes={this.state.palettes} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={routeProps => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}
