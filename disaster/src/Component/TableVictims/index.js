import React from 'react';
import MaterialTable from 'material-table';
import victimsData from './victimsData';
import victimsColumns from './victimsColumns';


export function TableVictims() {
  return (
    <div>
      <MaterialTable title="Victims" data={victimsData} columns={victimsColumns} options={{
        search: false,
        paging: false,
        selection: true,
        headerStyle: {
          backgroundColor: '#84221C',
          color: '#FFF'
        }
      }} />
    </div>
  );
}