import React from "react";
import MaterialTable from "material-table";

export const TableAll = () => {
  const dataI = [
    { report: "SOS1",date:"111223454"},
    { report: "Victim2",date:"73828382"}
  ];
  const columns = [
    { report: "Report", field: "report" },
    { date: "Date", field: "date" }
  ];
  return (
    <div>
      <MaterialTable title="Type of emergency" data={dataI} columns={columns} options={
          {search: false,
          paging: false,
          selection: true,
          headerStyle: {
            backgroundColor: '#84221C',
            color: '#FFF'
          }}
      } />
    </div>
  );
};