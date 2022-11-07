const localtunnel = require("localtunnel");

const URL = "pdm-tunnel-demo";

(async () => {
  const tunnel = await localtunnel({ subdomain: URL, port: 3000 });

  console.log("Tunnel running at: " + tunnel.url);

  tunnel.on("close", () => {
    console.log("Closed tunnel.");
  });
})();
