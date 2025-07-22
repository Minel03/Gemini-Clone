import React from "react";
import { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main flex-1 min-h-[100vh] pb-[15vh] relative">
      <div className="nav flex items-center justify-between text-[22px] p-[20px] text-[#585858]">
        <p>Gemini</p>
        <img className="w-[40px] rounded-[50%]" src={assets.user_icon} alt="" />
      </div>
      <div className="main-container max-w-[900px] m-auto">
        {!showResult ? (
          <>
            <div className="greet my-[50px] mx-[0px] text-[56px] text-[#c4c7c5] font-[500] p-[20px]">
              <p>
                <span className="bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent">
                  Hello, Mynel.
                </span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-[15px] p-[20px] mb-[10px]">
              <div className="card h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] font-[17px]">
                  Suggest beautiful places to see on an upcoming road trip
                </p>
                <img
                  className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]"
                  src={assets.compass_icon}
                  alt=""
                />
              </div>
              <div className="card h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] font-[17px]">
                  Briefly summarize this concept: AI
                </p>
                <img
                  className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]"
                  src={assets.bulb_icon}
                  alt=""
                />
              </div>
              <div className="card h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] font-[17px]">
                  Brainstorm team bonding activities for our work retreat
                </p>
                <img
                  className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]"
                  src={assets.message_icon}
                  alt=""
                />
              </div>
              <div className="card h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] font-[17px]">
                  Improve the readability of the following code
                </p>
                <img
                  className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]"
                  src={assets.code_icon}
                  alt=""
                />
              </div>
            </div>
          </>
        ) : (
          <div className="result py-[0px] px-[5%] max-h-[70vh] overflow-y-scroll">
            <div className="result-title my-[40px] mx-[0px] flex items-center gap-[20px]">
              <img
                className="w-[40px] rounded-[50%]"
                src={assets.user_icon}
                alt=""
              />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data flex items-start gap-[20px]">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p
                  className="text-[17px] font-[300] leading-[1.8]"
                  dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom ">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div className="flex items-center gap-[15px]">
              <img
                className="w-[24px] cursor-pointer"
                src={assets.gallery_icon}
                alt=""
              />
              <img
                className="w-[24px] cursor-pointer"
                src={assets.mic_icon}
                alt=""
              />
              {input ? (
                <img
                  onClick={() => onSent()}
                  className="w-[24px] cursor-pointer"
                  src={assets.send_icon}
                  alt=""
                />
              ) : (
                [null]
              )}
            </div>
          </div>
          <p className="bottom-info text-[13px] my-[15px] mx-auto text-center font-[300] text-[#585858]">
            Gemini may display inaccurate info, including offensive or biased
            content. It’s not a substitute for professional advice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
