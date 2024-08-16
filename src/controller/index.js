const { getRedisData, addUser, getList } = require("../services/index.js");
class wxController {
  async getRedisData(ctx, next) {
    const redisData = await getRedisData();

    if (accessToken) {
      return ctx.success(accessToken);
    }
    return ctx.error("accessToken 失效");
  }
  async addUser(ctx, next) {
    let { name, phone } = ctx.request.query;
    try {
      const data = await addUser(name, phone);
      return ctx.success(data);
    } catch (error) {
      return ctx.error(error);
    }
  }
  async getList(ctx, next) {
    let { page, limit } = ctx.request.query;
    try {
      const data = await getList(page, limit);
      return ctx.success(data);
    } catch (error) {
      return ctx.error(error);
    }
  }
}

module.exports = new wxController();