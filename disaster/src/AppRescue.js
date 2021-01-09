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
<<<<<<< HEAD
  const [message, setMessage] = useState("Message");
=======

  const [message, setMessage]= useState("");
>>>>>>> 1e2f9fc1e861044f0db5734b897c6672a53bf2d7

  return (
    <ThemeContext.Provider value={{message, setMessage}}>
    <div>
      <div class="topnav">
        <a href="#home" >RescueHelper</a>
        <a href="#back" >Back</a>
        <a href="#user" >User</a>
      </div>
<<<<<<< HEAD
      
      <ButtonTable messageTo = {message} />
=======
      <ButtonTable val={message} />
>>>>>>> 1e2f9fc1e861044f0db5734b897c6672a53bf2d7
      <div class="lol">
        <div class="map"><MapWithMarker /></div>
      </div>
      <div class="content">
<<<<<<< HEAD
        <div class="left">
        <Message />
          </div>
         
=======
        <div class="left"><Message val={message} setVal={setMessage} /></div>
>>>>>>> 1e2f9fc1e861044f0db5734b897c6672a53bf2d7
        <div class="right"><div> <div class="vertical-center"><ToggleSwitch /><ToggleSwitch /></div></div>
        </div>
      </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default AppRescue;
