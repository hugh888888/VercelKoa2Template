function data(ctx, status) {
  return async (msg, obj) => {
    obj = obj || new Object();
    if (typeof msg == "object") obj = msg;
    else if (typeof msg == "string") obj.message = msg;
    obj.status = status;
    return (ctx.body = obj);
  };
}

module.exports = async function (ctx, next) {
  if (!ctx.success)
    // 成功
    ctx.success = data(ctx, 0);
  if (!ctx.error)
    // 失败
    ctx.error = data(ctx, 1);

  await next();
};
