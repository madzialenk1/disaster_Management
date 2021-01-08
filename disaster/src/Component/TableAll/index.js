import React from "react";
import MaterialTable from "material-table";

export const TableAll = (props) => {

  return (
    <div>
      <MaterialTable title={props.isClicked} data={props.data} columns={props.columns} options={
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