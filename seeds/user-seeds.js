
const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
    {
        username: "acmcalvo",
        email: "acmcalvo",
        password: "password123",
    },
    
]

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;