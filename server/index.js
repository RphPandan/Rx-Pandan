const path = require("path");
const express = require("express");
// const compression = require("compression");
const next = require("next");
// const helmet = require("helmet");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // server.use(helmet());
  // server.use(compression());

  const staticPath = path.join(__dirname, "../static");
  server.use(
    "/static",
    express.static(staticPath, {
      maxAge: "30d",
      immutable: true,
    })
  );

  server.get("/test", (req, res) => {
    console.log("this is getting hit??");
    res.send("hello World");
  });

  server.get("*", (req, res) => {
    return handler(req, res);
  });

  startServer();

  function startServer() {
    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
    });
  }
});
