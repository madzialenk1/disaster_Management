import React, {useState} from "react";
import "./Style.css"
import { Table } from "../Table";

export const ButtonTable = () => {
    const [buttonClicked, setButtonClicked] = useState("All");
  

  const buttonPressed=(e)=> {
    switch(e.target.name){
      case "All":
        setButtonClicked("All");
        break;
      case "Victims":
        setButtonClicked("Victims");
        break;
      case "SOS":
        setButtonClicked("SOS");
        break;
    }
  }
    return (
    <div>
     <Table isClicked = {buttonClicked} />
     <div class="multi-button">
        <button name="Victims" onClick={buttonPressed}>Victims</button>
        <button name="All" onClick={buttonPressed}>All</button>
        <button name="SOS" onClick={buttonPressed}>SOS</button>
    </div> 
    </div>
    );
}