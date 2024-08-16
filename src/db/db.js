const { mongodbUrl } = process.env;
const mongoose = require("mongoose");
// 开始链接
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // proxyHost: "127.0.0.1",
  // proxyPort: 7890,
  writeConcern: {
    w: "majority",
    j: true,
    wtimeoutMS: 30000,
    wtimeout: 30000,
  },
});

// 获取连接对象
const conn = mongoose.connection;

conn.on("error", (err) => {
  console.error("连接数据库出错", err);
});

module.exports = mongoose;
