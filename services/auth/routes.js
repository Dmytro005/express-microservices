const handlers = require("./handlers");
const routes = [
  {
    method: "POST",
    path: "/internal/generate-token",
    handler: async function(request, h) {
      console.log("payload: ", request.payload);

      const user = await handlers.generateToken(request.payload);
      return h.response({ err: false, user });
    }
  }
];

module.exports = routes;
