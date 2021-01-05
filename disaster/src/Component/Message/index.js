import React from "react";
import "./Style.css"



export const Message = () => {
    return (
        <div class="chat-popup" id="myForm">
  <form action="/action_page.php" class="form-container">
    <textarea placeholder="Type message.." name="msg" required></textarea>
    <button type="submit" class="btn">Send</button>
  </form>
</div>
    );
}