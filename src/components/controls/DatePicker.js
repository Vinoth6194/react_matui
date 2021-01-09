import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import React from "react";
const convertToDefEventPara = (name, value) => ({
  target: {
    name,
    value,
  },
});
function DatePicker(props) {
  const { name, value, label, onChange } = props;
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        label={label}
        name={name}
        value={value}
        format="MMM/dd/yyyy"
        onChange={(date) => onChange(convertToDefEventPara(name, date))}
      ></KeyboardDatePicker>
    </MuiPickersUtilsProvider>
  );
}

export default DatePicker;
