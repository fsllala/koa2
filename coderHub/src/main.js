const app = require("./app/index.js");
const { APP_PORT } = require("./app/config.js");

app.listen(APP_PORT, () => {
  console.log("服务器启动成功~~");
});
