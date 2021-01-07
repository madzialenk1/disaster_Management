import React from "react";
import MaterialTable from "material-table";
import allData from "./allData";
import allColumns from "./allColumns";

export const TableAll = () => {

  return (
    <div>
      <MaterialTable title="Type of emergency" data={allData} columns={allColumns} options={
        {
          search: false,
          paging: false,
          selection: true,
          headerStyle: {
            backgroundColor: '#84221C',
            color: '#FFF'
          }
        }
      } />
    </div>
  );
};