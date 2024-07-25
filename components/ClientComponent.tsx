"use client";
import { VoiceProvider } from "@humeai/voice-react";
import Messages from "./Controls";
import Controls from "./Messages";

export default function ClientComponent({ accessToken }: { accessToken: string }) {
  return (
    <VoiceProvider
      auth={{ type: "accessToken", value: accessToken }}
      // onMessage={(message: unknown) => console.log(message)}
    >
      <input
        type="text"
        className="border-gray-100 border-2 rounded-sm my-3 py-1 px-4 outline-none"
        placeholder="text"
        name="text"
      />
      <Messages />
      <Controls />
    </VoiceProvider>
  );
}
