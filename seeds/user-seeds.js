const { User } = require("../models");

const userData = [
  {
    username: "Alejandra",
    email: "alendra@gmail.com",
    password: "password1234",
  },
  {
    username: "AlvaroA",
    email: "alvaroa@gmail.com",
    password: "password1234",
  },
  {
    username: "Esteban",
    email: "esteban@gmail.com",
    password: "password1234",
  },
  {
    username: "Dani",
    email: "dani@gmail.com",
    password: "password1234",
  },
  {
    username: "Duke",
    email: "duke@gmail.com",
    password: "password1234",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
