import React from 'react';
import MaterialTable from 'material-table';


export function TableVictims() {
  return (
    <div>
      <MaterialTable title="Victims" data={[
        {
          location: "Washington D.C.",
          name: "Madzia Pękacka",
          email: "magdaapekackaa@gmail.com",
          tel: "+48 8838345890",
          status: "Flood",
          action: "In Progress",
          message: "hej jestem w niebezpieczenstwie, ale jest ok."
        },
        {
          location: "New York City",
          name: "Mikolaj Santa",
          email: "mik@gmail.com",
          tel: "+56 876543567",
          status: "Flood",
          action: "In Progress",
          message: "hej I show you the way."
        }
      ]} columns={[
        { title: "Location", field: "location" },
        { title: "Name", field: "name" },
        { title: "Email", field: "email" },
        { title: "Tel", field: "tel" },
        { title: "Action", field: "action" },
        { title: "Message", field: "message" }
      ]} options={{
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