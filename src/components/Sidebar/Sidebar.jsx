// import React from 'react'
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  function isExpanded() {
    setExpanded((preVal) => {
      return (preVal = !preVal);
    });
    // console.log(expanded);
  }
  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={isExpanded}
          className="menu"
          src={assets.menu_icon}
          alt=""
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {expanded ? <p>New Chat</p> : null}
        </div>
        {expanded ? (
          <div className="recent">
            <p className="recent-title">Recent chat</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>Recent entry</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {expanded ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {expanded ? <p>History</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {expanded ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
