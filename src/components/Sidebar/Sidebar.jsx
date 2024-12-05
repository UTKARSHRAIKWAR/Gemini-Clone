// import React from 'react'
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const { onSent, prevPrompt, setRecentPromp } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPromp(prompt);
    onSent(prompt);
  };

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
            {prevPrompt.map((item, index) => {
              return (
                <div onClick={()=>loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              );
            })}
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
