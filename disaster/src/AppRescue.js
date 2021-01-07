import React, { useState } from "react";
import { ToggleSwitch } from "./Component/ToggleSwitch";
import { MapWithMarker } from "./Component/MapWithMarker";
import { Message } from "./Component/Message";
import { ButtonTable } from "./Component/ButtonTable";
import "./AppRescue.css"



function AppRescue() {
  return (
    <div>
      <div class="topnav">
        <a href="#home" >Rescue Helper</a>
        <a href="#back" >Back</a>
        <a href="#user" >User</a>
      </div>
      <ButtonTable />
      <div class="lol">
        <div class="map"><MapWithMarker /></div>
      </div>
      <div class="content">
        <div class="left"><Message /></div>
        <div class="right"><div> <div class="vertical-center"><ToggleSwitch /><ToggleSwitch /></div></div>
        </div>
      </div>
    </div>
  );
}

export default AppRescue;