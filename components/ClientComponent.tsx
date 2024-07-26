"use client";
import { VoiceProvider } from "@humeai/voice-react";
import Controls from "./Controls";
import Messages from "./Messages";

export default function ClientComponent() {
  return (
    // voice provider component from @humeai/voice-react SDK
    <VoiceProvider auth={{ type: "apiKey", value: String(process.env.NEXT_PUBLIC_HUME_API_KEY) }}>
      <input
        type="text"
        className="border-gray-100 border-2 rounded-sm my-3 py-1 px-4 outline-none"
        placeholder="text"
        name="text"
      />
      {/* component to display voices transcript users and humeai voice */}
      <Messages />

      {/* component to call and hang up voice, contains the call and hangup buttons */}
      <Controls />
    </VoiceProvider>
  );
}
