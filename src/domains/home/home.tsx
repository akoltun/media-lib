import { useEffect, useState } from "react";

interface AppealResponse {
  appeal: string;
}

const isAppealResponse = (data: unknown): data is AppealResponse =>
  typeof data === "object" &&
  data !== null &&
  "appeal" in data &&
  typeof (data as Record<string, unknown>).appeal === "string";

export const Home = () => {
  const [appeal, setAppeal] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/appeal");
      const raw: unknown = await res.json();
      if (!isAppealResponse(raw)) {
        throw new Error("Invalid response");
      }
      setAppeal(raw.appeal);
    };
    void fetchData();
  }, []);

  return <h1>Hello, {appeal ?? "..."}!</h1>;
};
