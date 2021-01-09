import React, { useState } from "react";
import { ToggleSwitch } from "./Component/ToggleSwitch";
import { MapWithMarker } from "./Component/MapWithMarker";
import { Message } from "./Component/Message";
import { ButtonTable } from "./Component/ButtonTable";
import "./AppRescue.css"

export const ThemeContext = React.createContext({
  message: "Madzia",
  setMessage: (mess) => {}
});

function AppRescue() {
  const [message, setMessage] = useState("Message");

  return (
    <ThemeContext.Provider value={{message, setMessage}}>
    <div>
      <div class="topnav">
        <a href="#home" >RescueHelper</a>
        <a href="#back" >Back</a>
        <a href="#user" >User</a>
      </div>
      
      <ButtonTable messageTo = {message} />
      <div class="lol">
        <div class="map"><MapWithMarker /></div>
      </div>
      <div class="content">
        <div class="left">
        <Message />
          </div>
         
        <div class="right"><div> <div class="vertical-center"><ToggleSwitch /><ToggleSwitch /></div></div>
        </div>
      </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default AppRescue;
