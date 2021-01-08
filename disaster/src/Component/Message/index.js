import React, {useState} from "react";
import "./Style.css"


export const Message = () => {
  const [message, setMessage] = useState("val");

  
  return (
    <div class="chat-popup" id="myForm">
      <form action="" class="form-container">
        <textarea type = "message" placeholder="Type message.." name="msg" required></textarea>
        <button type="submit" class="btn">Send</button>
      </form>
    </div>
  );
}