<<<<<<< HEAD
import React, {useState, useContext} from "react";
=======
import React, {useState} from "react";
>>>>>>> 1e2f9fc1e861044f0db5734b897c6672a53bf2d7
import "./Style.css"
import {ThemeContext} from "src/AppRescue";

export const Message = () => {
<<<<<<< HEAD
  const {setMessage} = useContext(ThemeContext);
  const hangleChange = (e) => setMessage(e.target.value);
=======
  const [message, setMessage] = useState("val");

>>>>>>> 1e2f9fc1e861044f0db5734b897c6672a53bf2d7
  
  return (
    <div class="chat-popup" id="myForm">
      <form action="" class="form-container">
<<<<<<< HEAD
        <textarea id = "textField" type = "message" placeholder="Type message.." name="msg" onChange={ (e) =>hangleChange(e) } required></textarea>
        <button type="submit" class="btn" onClick = {hangleChange}>Send</button>
=======
        <textarea type = "message" placeholder="Type message.." name="msg" required></textarea>
        <button type="submit" class="btn">Send</button>
>>>>>>> 1e2f9fc1e861044f0db5734b897c6672a53bf2d7
      </form>
      
    </div>
    
  );
}