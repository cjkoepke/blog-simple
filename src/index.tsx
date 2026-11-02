import { serve } from "bun";
import { renderToReadableStream } from "react-dom/server";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/404";
import { Post } from "./pages/Post";

const server = serve({
  routes: {
    // Serve index.html for all unmatched routes.
    "/": async () => {
      const stream = await renderToReadableStream(<Home />);
      return new Response(stream, {
        headers: { "Content-Type": "text/html" },
      });
    },
    "/posts/:id": async (req) => {
      const stream = await renderToReadableStream(<Post id={req.params.id} />);
      return new Response(stream, {
        headers: { "Content-Type": "text/html" },
      });
    },
    "/*": async () => {
      const stream = await renderToReadableStream(<NotFound />);
      return new Response(stream, {
        headers: { "Content-Type": "text/html" },
      });
    },
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
