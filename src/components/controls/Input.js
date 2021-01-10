import { TextField } from "@material-ui/core";
import React from "react";

export default function Input(props) {
  const { name, label, value, onChange, error = null } = props;
  return (
    <TextField
      autoComplete="off"
      variant="outlined"
      label={label}
      value={value}
      name={name}
      onChange={onChange}
      // error
      // helperText="Validation message here"
      {...(error && { error: true, helperText: error })}
    />
  );
}
