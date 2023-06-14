const bcrypt = require("bcryptjs");

const Users = [
  {
    username: "admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    username: "techInfoYT",
    email: "tech@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    username: "user",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
module.exports = Users;
