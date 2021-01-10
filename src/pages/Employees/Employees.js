import React from "react";
import PageHeader from "../../components/PageHeader";
import EmployeeForm from "./EmployeeForm";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import useTable from "../../components/useTable";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));
function Employee() {
  const classes = useStyles();
  const { TblContainer } = useTable();
  return (
    <>
      <PageHeader
        title="New Employee"
        subTitle="Form design with validation"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      ></PageHeader>
      <Paper className={classes.pageContent}>
        {/* <EmployeeForm /> */}
        <TblContainer></TblContainer>
      </Paper>
    </>
  );
}

export default Employee;
