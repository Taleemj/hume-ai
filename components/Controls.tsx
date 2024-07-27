"use client";
import { useVoice, VoiceReadyState } from "@humeai/voice-react";
import { ImPhoneHangUp } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMicrophone, FaMicrophoneSlash, FaRegClosedCaptioning } from "react-icons/fa";
import Image from "next/image";

export default function Controls() {
  const { connect, disconnect, readyState, mute, isMuted, unmute } = useVoice();

  if (readyState === VoiceReadyState.OPEN) {
    return (
      <div className="w-full h-[100vh] flex d items-center justify-center relative  bg-[#272727]">
        <div className="w-[150px] h-[150px] bg-[#414141] rounded-full grid place-items-center">
          <Image src="/Hume Ai.png" alt="logo" width={170} height={170} />
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
          <button className="bg-[#414141] hover:bg-[#555555] text-white font-bold py-2 px-6 w-[80px] h-[55px] grid place-items-center rounded-full text-[26px]">
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
