const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const cors = require("koa2-cors");
const session = require("koa-generic-session");
const index = require("./routes/index");

onerror(app);
// 服务端支持跨域
app.use(
  cors({
    // origin: 'http://localhost:8081',
    origin: function (ctx) {
      const requestOrigin = ctx.get("Origin");
      return requestOrigin;
    },
    credentials: true, // 允许跨域的时候带着 cookie
  })
);

// 配置 session
app.proxy = true;
app.keys = ["123456"];
app.use(
  session({
    cookie: {
      path: "/",
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
      sameSite: "none",
      secure: true,
    },
  })
);
app.use(require("./middleware/return_data"));
app.use(json());

app.use(require("koa-static")(__dirname + "/public"));
app.use(
  views(__dirname + "/views", {
    extension: "pug",
  })
);
app.use(index.routes(), index.allowedMethods());
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
