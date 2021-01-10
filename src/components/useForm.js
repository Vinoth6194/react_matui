import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";

export function useForm(initialFValues) {
  const [values, setValues] = useState(initialFValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(name, value);
  };
  return {
    values,
    setValues,
    handleInputChange,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));
export function Form(props) {
  const classes = useStyles();
  const { children, ...other } = props;
  return (
    <form className={classes.root} {...other}>
      {props.children}
    </form>
  );
}
