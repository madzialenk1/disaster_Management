import React, { useEffect, useState } from "react";
import "./Style.css"
import { TableAll } from "../TableAll";
import allData from "../TableAll/allData";
import allColumns from "../TableAll/allColumns";
import victimsColumns from "../TableAll/victimsColumns";
import victimsData from "../TableAll/victimsData";
import sosData from "../TableAll/sosData";
import sosColumns from "../TableAll/sosColumns";
import VictimService from "src/ApiService/VictimService";




export const ButtonTable = (props) => {
  const [buttonClicked, setButtonClicked] = useState("Type of Emergency");
  const [tableName, setTableName] = useState(allData);
  const [tableColumns, setTableColumns] = useState(allColumns);
 
  const [allXData, setAllData]= useState(null)
  const buttonPressed = (e) => {
    switch (e.target.name) {
      case "All":
        setButtonClicked(props.messageTo);
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
    useEffect( ()=> {
          VictimService.getVictims((response) => {
            setAllData(response.data)
            console.log(response)
          }
        )
       }
    );
  
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
        messageTo={props.messageTo}

      />
    </div>
  );
  }