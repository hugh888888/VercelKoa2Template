<div align="center">
  <h1>Vercel Koa2 Template</h1>
  <p><a href="https://template.li-h.me/">preview</a> · <a href="https://github.com/hugh888888/VercelKoa2Template/blob/master/readme_en.md">English</a> | 简体中文</p>
  <p>A template for deploying Koa2 on Vercel, supporting connections to Redis and MongoDB. Use Vercel to set up backend API services for free, no server needed.</p>
</div>

## 🌈 Features

- 🚀 Quick deployment, no server needed [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A//github.com/hugh888888/VercelKoa2Template&env=redis_url&env=mongodbUrl)
- ✈️ Supports connections to Redis and MongoDB
- ✨ Supports custom domain configuration

## 👋 Deployment Guide

### Preparation

- Domain (optional): It is recommended to use a custom domain in China, which can be hosted on Cloudflare. For overseas, you can use the domain provided by Vercel.
- [MongoDB (optional)](https://www.mongodb.com): MongoDB database
- [Redis (optional)](https://upstash.com/): Redis database
- [Vercel](https://vercel.com): Register a Vercel account to deploy the Koa2 service
- Vercel, MongoDB, and Redis can be registered and logged in using a GitHub account with a personal free plan.
  ![MongoDB Configuration](./img/mongodb.png)
- ![Redis Configuration](./img/redis.png)
- ![Domain Configuration](./img/vercel.png)

### Deployment

**Environment Variables:**

| Variable Name | Description          | Example                                                                                        |
| ------------- | -------------------- | ---------------------------------------------------------------------------------------------- |
| redis_url     | Redis database URL   | `redis://default:xxxxx@xxxxxxxx.upstash.io:34903`                                              |
| mongodbUrl    | MongoDB database URL | `mongodb+srv://<username>:<pwd>@xxxx.ulopy3w.mongodb.net/<dbname>?retryWrites=true&w=majority` |

**Vercel:**

It is recommended to use the one-click deploy button (this operation will automatically create a repository in your GitHub account and associate it with Vercel for deployment):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A//github.com/hugh888888/VercelKoa2Template&env=redis_url&env=mongodbUrl)

## 🔨 Local Development and Debugging

1. Deploy this project on Vercel and fill in the environment variables.
2. Pull the code to your local machine and execute the following commands:

```bash
# Install Vercel CLI
pnpm i -g vercel
# Pull environment variables
vercel pull --environment=development
# Enter the project directory and install dependencies
pnpm install
# Start the project using vercel dev
vercel dev
```

## 🪡API demo

- [getRedisData](https://template.li-h.me/getRedisData) https://template.li-h.me/getRedisData
- [getRedisData](https://template.li-h.me/addUser?name=1&phone=2) https://template.li-h.me/addUser
- [getRedisData](https://template.li-h.me/getList) https://template.li-h.me/getList

[![Star History Chart](https://api.star-history.com/svg?repos=hugh888888/VercelKoa2Template&type=Date)](https://star-history.com/#hugh888888/VercelKoa2Template&Date)
