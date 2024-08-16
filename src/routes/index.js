const router = require("koa-router")();
const { getRedisData, addUser, getList } = require("../controller/index");
router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "Hello World!",
  });
});
router.get("/getRedisData", getRedisData);
router.get("/addUser", addUser);
router.get("/getList", getList);

module.exports = router;
