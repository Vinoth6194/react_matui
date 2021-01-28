import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import EmployeeForm from "./EmployeeForm";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import Paper from "@material-ui/core/Paper";
import {
  makeStyles,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
} from "@material-ui/core";
import useTable from "../../components/useTable";
import * as employeeService from "../../services/employeeService";
import AddIcon from "@material-ui/icons/Add";
import Controls from "../../components/controls/Controls";
import Popup from "../../components/Popup";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import Notification from "../../components/Notification";
const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  newButton: {
    position: "absolute",
    right: "10px",
  },
}));
const headCells = [
  { id: "fullname", label: "Employee Name" },
  { id: "email", label: "Email Address (Personal)" },
  { id: "mobile", label: "Mobile Number" },
  { id: "department", label: "Department", disableSorting: true },
  { id: "actions", label: "Actions" },
];
function Employee() {
  const classes = useStyles();
  const [records, setRecords] = useState(employeeService.getAllEmployees());
  const [openPopup, setOpenPopup] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPaginationAndSorting,
  } = useTable(records, headCells);
  const addOrEdit = (employee, resetForm) => {
    employeeService.insertEmployee(employee);
    resetForm();
    setOpenPopup(false);
    setRecords(employeeService.getAllEmployees());
    setNotify({
      isOpen: true,
      message: "Submitted Successfully",
      type: "success",
    });
  };
  return (
    <>
      <PageHeader
        title="New Employee"
        subTitle="Form design with validation"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      ></PageHeader>
      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.Button
            variant="outlined"
            text="Add New"
            startIcon={<AddIcon></AddIcon>}
            className={classes.newButton}
            onClick={() => setOpenPopup(true)}
          ></Controls.Button>
        </Toolbar>
        <TblContainer>
          <TblHead></TblHead>
          <TableBody>
            {recordsAfterPaginationAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.department}</TableCell>
                <TableCell>
                  <Controls.ActionButton>
                    <EditOutlinedIcon color="primary" />
                  </Controls.ActionButton>
                  <Controls.ActionButton>
                    <CloseOutlinedIcon color="secondary" />
                  </Controls.ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title="Employee Form"
      >
        <EmployeeForm addOrEdit={addOrEdit} />
      </Popup>
      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
}

export default Employee;
