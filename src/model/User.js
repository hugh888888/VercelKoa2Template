const mongoose = require("../db/db");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true, // 设置唯一索引
      required: true, // 必须
    },
    phone: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", UserSchema);

module.exports = User;
