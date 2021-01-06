import React, {useState} from "react";
import {ToggleSwitch} from "./Component/ToggleSwitch";
import {MapWithMarker} from "./Component/MapWithMarker";
import {Message} from "./Component/Message";
import { ButtonTable } from "./Component/ButtonTable";
import "./AppRescue.css"



function AppRescue() {
  return (
    <div>
      <div class="container">
        <div class="vertical-center"><ToggleSwitch /><ToggleSwitch /></div>
      </div>
    <MapWithMarker />
    <ButtonTable />
    <Message />
    </div>
  );
}

export default AppRescue;
