import React from 'react';
import MaterialTable from 'material-table';

export const TableSOS = () => {
  const dataI = [
    { location: "Madzia",ipAddress:"111223454",message:"hej"},
    { location: "Prasowa",ipAddress:"73828382",message:"umieram help"}
  ];
  const columns = [
    { title: "Location", field: "location" },
    { title: "IpAddress", field: "ipAddress" },
    { title: "Message", field: "message" }
  ];
  return (
    <div>
      <MaterialTable title="SOS" data={dataI} columns={columns} options={
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