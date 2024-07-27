"use client";
import { VoiceProvider } from "@humeai/voice-react";
import Controls from "./Controls";

export default function ClientComponent() {
  return (
    // voice provider component from @humeai/voice-react SDK
    <VoiceProvider auth={{ type: "apiKey", value: String(process.env.NEXT_PUBLIC_HUME_API_KEY) }}>
      {/* main component containing controls and interactables */}
      <Controls />
    </VoiceProvider>
  );
}
