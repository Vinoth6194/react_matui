import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { useForm, Form } from "../../useForm";

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
  const { values, setValues, handleInputChange } = useForm(initialFValues);

  return (
    <Form>
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
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              row
              name="gender"
              value={values.gender}
              onChange={handleInputChange}
            >
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
              ></FormControlLabel>
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              ></FormControlLabel>
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              ></FormControlLabel>
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Form>
  );
}

export default EmployeeForm;
