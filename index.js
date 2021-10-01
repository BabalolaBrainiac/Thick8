const http = require("http");
const app = require("./");
const PORT = process.env.PORT || 3001;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
