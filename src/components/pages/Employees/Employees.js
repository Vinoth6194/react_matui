import React from "react";
import PageHeader from "../../PageHeader";
import EmployeeForm from "./EmployeeForm";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";

function Employee() {
  return (
    <>
      <PageHeader
        title="New Employee"
        subTitle="Form design with validation"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      ></PageHeader>
      <EmployeeForm />
    </>
  );
}

export default Employee;
