import { Table } from "@material-ui/core";
import React from "react";

function useTable(records, headCells) {
  const TblContainer = (props) => <Table></Table>;
  return {
    TblContainer,
  };
}

export default useTable;
