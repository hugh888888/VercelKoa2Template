const dayjs = require("dayjs");
const RedisClient = require("../db/redis");
const User = require("../model/User");

async function getRedisData() {
  try {
    const client = new RedisClient();
    client.set(
      "redisData",
      "redisData" + dayjs().format("YYYY-MM-DD HH:mm:ss"),
      60
    );
    let redisData = await client.get("redisData");
    return redisData;
  } catch (error) {
    return error;
  }
}
async function addUser(name, phone) {
  // 查找数据库
  const newUser = User.create({
    name,
    phone,
  });
  return newUser;
}
async function getList(page = 1, limit = 10) {
  try {
    // 计算跳过的文档数量
    const skip = (page - 1) * limit;

    // 并行执行查询和计数操作
    const [Users, total] = await Promise.all([
      User.find().select("_id name phone").skip(skip).limit(limit),
      User.countDocuments(),
    ]);

    // 返回结果
    return {
      list: Users,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  } catch (error) {
    console.error("Error fetching User list:", error);
    throw error; // 或处理错误
  }
}
module.exports = { getRedisData, addUser, getList };
