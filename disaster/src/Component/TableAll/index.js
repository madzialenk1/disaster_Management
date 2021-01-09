import React, {useContext} from "react";
import MaterialTable from "material-table";

<<<<<<< HEAD

export const TableAll = (props) => {

  const handleSelection = () => {

  }
=======
export const TableAll = (props) => {
>>>>>>> 1e2f9fc1e861044f0db5734b897c6672a53bf2d7

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
      }
      onSelectionChange={(rows) => alert(props.messageTo)}
       />
    </div>
  );
};