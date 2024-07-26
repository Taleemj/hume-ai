"use client";
import { useVoice, VoiceReadyState } from "@humeai/voice-react";
export default function Controls() {
  const { connect, disconnect, readyState } = useVoice();

  if (readyState === VoiceReadyState.OPEN) {
    return (
      // button to hang up and close connection
      <>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            disconnect();
          }}
        >
          Hang up
        </button>
        <p className="text-green-500 mt-2">Connected.</p>
      </>
    );
  }

  return (
    // button to call hume ai and open connection
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => {
        connect();
      }}
    >
      Call
    </button>
  );
}
