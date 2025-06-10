const connect = require("connect");
const serveStatic = require("serve-static");

connect()
  .use(serveStatic("./app/build/"))
  .listen(8082, "localhost", () => console.log("Server running on http://localhost:8082"));
