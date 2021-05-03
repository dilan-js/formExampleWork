/* eslint-disable */
import React, { useEffect, useState, useContext } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import {
  TextField,
  Button,
  FormControlLabel,
  Select,
  FormControl,
  FormLabel,
  RadioGroup,
  FormGroup,
  Checkbox,
  FormHelperText,
} from "@material-ui/core";
import { Radio } from "@material-ui/core";

import Question from "./QuestionCard";

const useStyles = makeStyles((theme) => ({
  submitButton: {
    backgroundColor: "red",
    color: "#FFFFFF",
    fontWeight: "bold",
    paddingLeft: "20px",
    paddingRight: "20px",
    marginLeft: "6.75px",
  },
}));

const marks = [
  {
    value: 0,
    label: "$0",
  },
  {
    value: 5000,
    label: "$5000",
  },
];

const RentSlider = withStyles({
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
});

export default function CheckboxInput({ name, options, onSelect }) {
  const classes = useStyles();

  const [value, setValue] = React.useState(null);

  //   const handleChange = (event) => {
  //     setValue(event.target.value);
  //     onSelect(event.target.value);
  //   };

  const newStateVar = [];

  const [state, setState] = React.useState(options);

  const handleChange = (event, optionId) => {
    state.forEach((option) => {
      if (option.optionId === optionId) {
        option.checked = !option.checked;
      }
    });
    setState(state);
    console.log("THIS IS STATE: ", state);
  };

  useEffect(() => {
    options.forEach((option) => {
      option.checked = false;
    });
  });

  return (
    <>
      <FormControl
        required
        // error={error}
        component="fieldset"
        className={classes.formControl}
      >
        <FormLabel component="legend">
          Pick 3-6 options for best results
        </FormLabel>
        <FormGroup>
          {options.map((option) => (
            <FormControlLabel
              value={option.value}
              key={option.optionId}
              control={
                <Checkbox
                  key={option.Id}
                  checked={option.checked}
                  onChange={(e) => handleChange(e, option.optionId)}
                  name={option.name}
                />
              }
              label={option.label}
              onChange={handleChange}
            />
          ))}

          {/* <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={antoine}
                onChange={handleChange}
                name="antoine"
              />
            }
            label="Antoine Llorca"
          /> */}
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl>
    </>
  );
}
