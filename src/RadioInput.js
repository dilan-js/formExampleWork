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

export default function RadioInput({ name, options, onSelect }) {
  const classes = useStyles();

  const [value, setValue] = React.useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <>
      <FormControl component="fieldset">
        <RadioGroup
          name={name}
          value={value}
          style={{
            display: "flex",
            flexDirection: "row",
          }}
          onChange={handleChange}
        >
          {options.map((option) => (
            <FormControlLabel
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
}
