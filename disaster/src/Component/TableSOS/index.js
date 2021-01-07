import React from 'react';
import MaterialTable from 'material-table';
import sosColumns from './sosColumns';
import sosData from './sosData';
export const TableSOS = () => {

  return (
    <div>
      <MaterialTable title="SOS" data={sosData} columns={sosColumns} options={
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