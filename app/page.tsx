import ClientComponent from "@/components/ClientComponent";

export default async function Page() {
  const apiKey = String(process.env.NEXT_PUBLIC_HUME_API_KEY);

  if (!apiKey) {
    throw new Error();
  }

  return <ClientComponent />;
}
