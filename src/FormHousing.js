/* eslint-disable */
import React from "react";
// import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import {
  Zoom,
  Fab,
  Container,
  Box,
  useScrollTrigger,
  CssBaseline,
  Typography,
  AppBar,
  Toolbar,
} from "@material-ui/core";

// import FormikForm from "./FormikForms";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  borderClass: {
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingBottom: "20px",
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export default function FormikHousingContainer(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Toolbar id="back-to-top-anchor" />
      <Container className={classes.borderClass}>
        <Box my={2}>{props.children}</Box>
      </Container>
      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
