import React from 'react'
import ChatbotIcon from './components/ChatbotIcon'

const App = () => {
  return (
    <div className='container'>
      <div className="chatbot-popup">
        {/* chatbot header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button class="material-symbols-rounded">keyboard_arrow_down</button>
        </div>

        {/* chat bot body */}
        <div className="chat-body">
          <div className='message bot-message'>
            <ChatbotIcon />
            <p className='message-text'>
              Hey there 👋 <br /> How can I help you today
            </p>
          </div>
          <div className='message user-message'>
            <p className='message-text'>
              Hi, I need some help with my order.
            </p>
          </div>
          </div>
          {/* chatbot footer */}
          <div className='chat-footer'>
            <form action="#" className="chat-form">
              <input type="text" placeholder='Message...' className="message-input" required />
              <button class="material-symbols-rounded">arrow_upward</button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default App