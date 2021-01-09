import React, { useState } from "react";
import "./Style.css"
import { TableAll } from "../TableAll";
import allData from "../TableAll/allData";
import allColumns from "../TableAll/allColumns";
import victimsColumns from "../TableAll/victimsColumns";
import victimsData from "../TableAll/victimsData";
import sosData from "../TableAll/sosData";
import sosColumns from "../TableAll/sosColumns";
<<<<<<< HEAD
=======

>>>>>>> 1e2f9fc1e861044f0db5734b897c6672a53bf2d7


export const ButtonTable = () => {
  const [buttonClicked, setButtonClicked] = useState("Type of Emergency");
  const [tableName, setTableName] = useState(allData);
  const [tableColumns, setTableColumns] = useState(allColumns);

export const ButtonTable = (props) => {
  const [buttonClicked, setButtonClicked] = useState("Type of Emergency");
  const [tableName, setTableName] = useState(allData);
  const [tableColumns, setTableColumns] = useState(allColumns);

  const buttonPressed = (e) => {
    switch (e.target.name) {
      case "All":
<<<<<<< HEAD
        setButtonClicked(props.messageTo);
=======
        setButtonClicked("Type of Emergency");
>>>>>>> 1e2f9fc1e861044f0db5734b897c6672a53bf2d7
        setTableColumns(allColumns);
        setTableName(allData);
        break;
      case "Victims":
        setButtonClicked("Victims");
        setTableColumns(victimsColumns);
        setTableName(victimsData);
        break;
      case "SOS":
        setButtonClicked("SOS");
        setTableColumns(sosColumns);
        setTableName(sosData);
        break;
    }
  }
  return (
    <div>
      <div class="multi-button">
        <button name="Victims" onClick={buttonPressed}>Victims</button>
        <button name="All" onClick={buttonPressed}>All</button>
        <button name="SOS" onClick={buttonPressed}>SOS</button>
      </div>
      <TableAll isClicked={buttonClicked}
        data={tableName}
        columns={tableColumns}
<<<<<<< HEAD
        messageTo={props.messageTo}
=======
>>>>>>> 1e2f9fc1e861044f0db5734b897c6672a53bf2d7

      />
    </div>
  );
}