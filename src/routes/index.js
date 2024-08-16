const router = require("koa-router")();
const { getRedisData, addUser, getList } = require("../controller/index");
router.get("/", async (ctx, next) => {
  ctx.body = "<h1>Hello, World!</h1>";
});
router.get("/getRedisData", getRedisData);
router.get("/addUser", addUser);
router.get("/getList", getList);

module.exports = router;
