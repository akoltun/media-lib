import { serve } from "bun"
import index from "./index.html"
import { apiRoutes } from "./app/api-routes"

const server = serve({
  routes: {
    "/*": index,
    ...apiRoutes,
  },

  development: process.env.NODE_ENV !== "production" && {
    hmr: true,
    console: true,
  },
})

console.log(`Server running at ${server.url}`)
