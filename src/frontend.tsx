import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Home } from "./domains/home/home"

const elem = document.getElementById("root")!
const app = (
  <StrictMode>
    <Home />
  </StrictMode>
)

if (import.meta.hot) {
  const root = (import.meta.hot.data.root ??= createRoot(elem))
  root.render(app)
} else {
  createRoot(elem).render(app)
}
