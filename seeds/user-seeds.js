const { User } = require('../models');

const userData = [
    {
        username: "acmcalvo",
        // twitter: "martinb",
        // github: "martinb",
        email: "acmcalvo",
        password: "password123",
    },
    
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;