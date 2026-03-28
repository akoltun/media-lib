import { useEffect, useState } from "react"

interface AppealResponse {
  appeal: string
}

export const Home = () => {
  const [appeal, setAppeal] = useState<string | null>(null)

  useEffect(() => {
    fetch("/api/appeal")
      .then(res => res.json() as Promise<AppealResponse>)
      .then(data => setAppeal(data.appeal))
  }, [])

  return (
    <h1>Hello, {appeal ?? "..."}!</h1>
  )
}
