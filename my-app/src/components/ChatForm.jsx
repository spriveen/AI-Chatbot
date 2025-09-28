import React, { useRef } from 'react'


const ChatForm = ({chatHistory,setChatHistory, generateBotResponse}) => {
    const inputRef = useRef();

   const handleFormSubmit = (e)=>{
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if(!userMessage) return;
    inputRef.current.value = "";

    // Update chat history with the user messsage
    setChatHistory((history) =>[...history,{role: "user", text:userMessage}]);
   
     // Add Thinking... placeholder for the bot
   setTimeout (()=> setChatHistory((history)=>[...history, {role:"model" , text:"Thinking..."}]),
   600);
  //  Call function gto gemerate bots
  generateBotResponse([...chatHistory,{role: "user", text:userMessage}]);
}

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
              <input ref={inputRef} type="text" placeholder='Message...' className="message-input" required />
              <button class="material-symbols-rounded">arrow_upward</button>
            </form>
  )
}

export default ChatForm