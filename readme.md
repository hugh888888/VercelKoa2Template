<div align="center">
  <h1>Vercel Koa2 Template</h1>
  <p><a href="https://template.li-h.me/">preview</a> · <a href="https://github.com/hugh888888/VercelKoa2Template/blob/main/README_en.md">English</a> | 简体中文</p>
  <p>一个可以在vercel上部署koa2的模板，支持连接redis和mongodb，免费使用vercel搭建后端接口服务，无需要服务器</p>

</div>

## 🌈 特点

- 🚀 快速部署，无需服务器 [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A//github.com/hugh888888/VercelKoa2Template&env=redis_url&env=mongodbUrl)
- ✈️ 支持连接 redis 和 mongodb
- ✨ 支持配置自定义域名

## 👋 部署教程

### 准备工作

- 域名（可选） 国内推荐使用自定义域名，可托管 CLoudflare，国外使用 vercel 自带域名即可
- [mongodb（可选）](https://www.mongodb.com) mongodb 数据库
- [redis（可选）](https://upstash.com/) redis 数据库
- [Vercel](https://vercel.com)注册 Vercel 账号，用于部署 Koa2 服务
- vercel mongodb redis 可使用 github 账号注册登录，使用个人免费计划
  ![mongodb 配置](./img/mongodb.png)
- ![redis配置](./img/redis.png)
- ![域名配置](./img/vercel.png)

### 部署

**环境变量:**

| 变量名     | 说明               | 示例                                                                                           |
| ---------- | ------------------ | ---------------------------------------------------------------------------------------------- |
| redis_url  | redis 数据库 Url   | `redis://default:xxxxx@xxxxxxxx.upstash.io:34903`                                              |
| mongodbUrl | mongodb 数据库 url | `mongodb+srv://<username>:<pwd>@xxxx.ulopy3w.mongodb.net/<dbname>?retryWrites=true&w=majority` |

**Vercel:**

推荐使用一键部署按钮（此操作会在你的 github 账户中自动创建仓库并关联部署到 vercel）：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A//github.com/hugh888888/VercelKoa2Template&env=redis_url&env=mongodbUrl)

## 🔨 本地运行调试

- 1、vercel 上部署本项目，填写环境变量。
- 2、拉取代码到本地，执行以下命令

```bash
# 安装 vercel cli
pnpm i -g vercel
# 获取环境变量
vercel pull --environment=development
# 进入项目目录，安装依赖
pnpm install
# 使用vercel dev启动项目
vercel dev
```

## 🪡 接口 demo

- [getRedisData](https://template.li-h.me/getRedisData) https://template.li-h.me/getRedisData
- [getRedisData](https://template.li-h.me/addUser?name=1&phone=2) https://template.li-h.me/addUser
- [getRedisData](https://template.li-h.me/getList) https://template.li-h.me/getList

[![Star History Chart](https://api.star-history.com/svg?repos=hugh888888/VercelKoa2Template&type=Date)](https://star-history.com/#hugh888888/VercelKoa2Template&Date)
