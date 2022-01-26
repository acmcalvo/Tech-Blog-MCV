const { User } = require('../models');

const userData = [{
        username: 'Alejandra',
        password: 'password123'

    },
    {
        username: 'Esteban',
        password: 'password123'
    },
    {
        username: 'Valeria',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;