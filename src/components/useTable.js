import { Table, TableCell, TableHead, TableRow } from "@material-ui/core";
import React from "react";

function useTable(records, headCells) {
  const TblContainer = (props) => <Table>{props.children}</Table>;
  const TblHead = (props) => {
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell id={headCell.id}>{headCell.label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };
  return {
    TblContainer,
    TblHead,
  };
}

export default useTable;
