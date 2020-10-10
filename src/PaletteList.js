import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";
import Avatar from "@material-ui/core/Avatar";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import styles from "./styles/PaletteListStyles";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class PaletteList extends Component {
  state = {
    openDeleteDialogue: false,
    deletingId: ""
  };

  goToPalette = id => {
    this.props.history.push(`/palette/${id}`);
  };

  openDialogue = id => {
    this.setState({
      openDeleteDialogue: true,
      deletingId: id
    });
  };
  closeDialogue = () => {
    this.setState({
      openDeleteDialogue: false,
      deletingId: ""
    });
  };
  handleDelete = () => {
    this.props.deletePalette(this.state.deletingId);
    this.closeDialogue();
  };
  render() {
    const { palettes, classes, deletePalette } = this.props;
    const { openDeleteDialogue, deletingId } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>React Colors</h1>
            <Link to="/palette/new"> Create Palette</Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {palettes.map(palette => (
              <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                <MiniPalette
                  {...palette}
                  handleClick={this.goToPalette}
                  // handleDelete={deletePalette}
                  openDialogue={this.openDialogue}
                  key={palette.id}
                  id={palette.id}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={openDeleteDialogue}
          aria-labelledby="delete-dialogue-title"
          onClose={this.closeDialogue}
        >
          <DialogTitle id="delete-dialgue-title">
            Delete This Palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={this.handleDelete}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Delete</ListItemText>
            </ListItem>
            <ListItem button onClick={this.closeDialogue}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <Close />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Cancel</ListItemText>
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
