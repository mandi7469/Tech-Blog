const { User } = require("../models");

const userData = [
  {
    username: "rachel_green",
    password: "password123",
  },
  {
    username: "phoebe_buffay",
    password: "password123",
  },
  {
    username: "chandler_bing",
    password: "password123",
  },
  {
    username: "ross_geller",
    password: "password123",
  },
  {
    username: "monica_geller",
    password: "password123",
  },
  {
    username: "joey_tribbiani",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
