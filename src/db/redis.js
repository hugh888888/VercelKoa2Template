const Redis = require("ioredis");
class RedisClient {
  constructor() {
    let { redis_url } = process.env;
    this.redis = new Redis(redis_url);
  }

  async get(key) {
    return await this.redis.get(key);
  }

  async set(key, value, expireSeconds = 0) {
    if (expireSeconds > 0) {
      await this.redis.set(key, value, "EX", expireSeconds);
    } else {
      let data = await this.redis.set(key, value);
    }
  }

  async del(key) {
    await this.redis.del(key);
  }

  async incr(key) {
    await this.redis.incr(key);
  }

  async decr(key) {
    await this.redis.decr(key);
  }

  async hget(hash, key) {
    const value = await this.redis.hget(hash, key);
    return value ? JSON.parse(value) : null;
  }

  async hset(hash, key, value) {
    const stringValue = JSON.stringify(value);
    await this.redis.hset(hash, key, stringValue);
  }

  async hdel(hash, key) {
    await this.redis.hdel(hash, key);
  }

  async hincr(hash, key) {
    await this.redis.hincrby(hash, key, 1);
  }

  async hdecr(hash, key) {
    await this.redis.hincrby(hash, key, -1);
  }
}

module.exports = RedisClient;
