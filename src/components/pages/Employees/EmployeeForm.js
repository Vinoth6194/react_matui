import { Grid, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));
const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

function EmployeeForm() {
  const classes = useStyles();
  const [values, setValues] = useState(initialFValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <form className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            label="Full Name"
            value={values.fullName}
            name="fullName"
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            label="Email"
            value={values.email}
            name="email"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </form>
  );
}

export default EmployeeForm;
