import React, { useState, useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  const prompts = Array.isArray(prevPrompts) ? prevPrompts : [];

  return (
    <div className="sidebar min-h-[100vh] inline-flex flex-col justify-between bg-[#f0f4f9] py-[25px] px-[15px]">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu block ml-[10px] cursor-pointer w-[20px]"
          src={assets.menu_icon}
          alt="Menu"
        />
        <div
          className="new-chat mt-[50px] inline-flex items-center gap-[10px] py-[10px] px-[15px] bg-[#e6eaf1] rounded-[50px] text-[14px] text-gray-400 cursor-pointer"
          onClick={() => {
            newChat();
          }}>
          <img className="w-[20px]" src={assets.plus_icon} alt="New Chat" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended && prompts.length > 0 ? (
          <div className="recent flex flex-col">
            <p className="recent-title mt-[30px] mb-[20px]">Recent</p>
            {prompts.map((item, index) => (
              <div
                key={index}
                onClick={() => loadPrompt(item)}
                className="recent-entry flex items-start gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
                <img
                  className="w-[20px]"
                  src={assets.message_icon}
                  alt="Message"
                />
                <p>{item.slice(0, 18)}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="bottom flex flex-col">
        <div className="bottom-item recent-entry flex items-start gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img className="w-[20px]" src={assets.question_icon} alt="Help" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry flex items-start gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img className="w-[20px]" src={assets.history_icon} alt="Activity" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry flex items-start gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img className="w-[20px]" src={assets.setting_icon} alt="Settings" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
