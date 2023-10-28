const fs = require("fs");

const useRoutes = (app) => {
  // fs.readdirSync返回的是个数组;
  fs.readdirSync(__dirname).forEach((file) => {
    if (file == "index.js") return;
    const router = require(`./${file}`);
    app.use(router.routes());
    app.use(router.allowedMethods());
  });
};

module.exports = useRoutes;
