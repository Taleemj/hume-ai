"use client";
import { useState, useEffect, useRef } from "react";
import { useVoice, VoiceReadyState } from "@humeai/voice-react";
import { ImPhoneHangUp } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMicrophone, FaMicrophoneSlash, FaRegClosedCaptioning } from "react-icons/fa";
import Image from "next/image";

export default function Controls() {
  const { connect, disconnect, readyState, mute, isMuted, unmute, messages } = useVoice();
  const [isCaptioning, setIsCaptioning] = useState(false);
  const captionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (captionsRef.current) {
      captionsRef.current.scrollTop = captionsRef.current.scrollHeight;
    }
  }, [messages]);

  if (readyState === VoiceReadyState.OPEN) {
    return (
      <div className="w-full h-[100vh] flex flex-col items-center justify-center relative  bg-[#272727]">
        <div className="w-[150px] h-[150px] bg-[#414141] rounded-full grid place-items-center">
          <Image src="/Hume Ai.png" alt="logo" width={170} height={170} />
        </div>

        <div
          className={`w-full mx-auto mt-5 text-white overflow-y-scroll captions my-3 transition-all duration-300 ${
            isCaptioning ? "h-[40%] md:h-[250px] p-4" : "h-0 p-0"
          }`}
          ref={captionsRef}
        >
          {messages.map((msg, index) => {
            if (msg.type === "user_message" || msg.type === "assistant_message") {
              return (
                <div className="text-[17px] py-1" key={msg.type + index}>
                  <div className="font-bold">{msg.message.role == "user" ? "You" : "EVI"}</div>
                  <div>{msg.message.content}</div>
                </div>
              );
            }

            return null;
          })}
        </div>
        <div
          className={
            "flex items-center justify-between w-[75%] md:w-[20%] mx-auto fixed bottom-[3%] left-1/2 transform -translate-x-1/2"
          }
        >
          <button
            onClick={() => (isMuted ? unmute() : mute())}
            className={`${
              isMuted ? "bg-red-600 hover:bg-red-500" : "bg-[#414141] hover:bg-[#555555]"
            }  text-white font-bold py-2 px-6 w-[80px] h-[55px] grid place-items-center rounded-full text-[21px]`}
          >
            {isMuted ? <FaMicrophoneSlash /> : <FaMicrophone />}
          </button>
          <button
            onClick={() => setIsCaptioning(!isCaptioning)}
            className={` ${
              isCaptioning ? "bg-blue-600 hover:bg-blue-500" : "bg-[#414141] hover:bg-[#555555]"
            } text-white font-bold py-2 px-6 w-[80px] h-[55px] grid place-items-center rounded-full text-[26px]`}
          >
            <FaRegClosedCaptioning />
          </button>
          <button
            className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-6 w-[80px] h-[55px] grid place-items-center rounded-full text-[26px]"
            onClick={() => {
              disconnect();
            }}
          >
            <ImPhoneHangUp />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-[#272727]">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded flex items-center gap-2 text-[18px]"
        onClick={() => {
          connect();
        }}
      >
        <FaPhoneAlt /> Start Call
      </button>
    </div>
  );
}
