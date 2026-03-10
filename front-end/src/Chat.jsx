import React from 'react';
import './Chat.css';

const Chat = (props) => (
  <div className="ChatPage">

    <main className="main-content">
      <input className="search-bar" placeholder="search : name" />
      <section className="chat-list">
        <div className="chat-card">
          <div className="chat-photo">Photo</div>
          <div className="chat-details">
            <strong>Name:</strong> Recent massage preview <span style={{float:'right'}}>10 min ago</span>
          </div>
        </div>
        <div className="chat-card">
          <div className="chat-photo">Photo</div>
          <div className="chat-details">
            <strong>Name:</strong> Recent massage preview <span style={{float:'right'}}>10 min ago</span>
          </div>
        </div>
        <div className="chat-card">
          <div className="chat-photo">Photo</div>
          <div className="chat-details">
            <strong>Name:</strong> Recent massage preview <span style={{float:'right'}}>10 min ago</span>
          </div>
        </div>
        <div className="chat-card">
          <div className="chat-photo">Photo</div>
          <div className="chat-details">
            <strong>Name:</strong> Recent massage preview <span style={{float:'right'}}>10 min ago</span>
          </div>
        </div>
        <div className="chat-card">
          <div className="chat-photo">Photo</div>
          <div className="chat-details">
            <strong>Name:</strong> Recent massage preview <span style={{float:'right'}}>10 min ago</span>
          </div>
        </div>
        <div className="chat-card">
          <div className="chat-photo">Photo</div>
          <div className="chat-details">
            <strong>Name:</strong> Recent massage preview <span style={{float:'right'}}>10 min ago</span>
          </div>
        </div>
      </section>
    </main>
    
  </div>
);

export default Chat;
