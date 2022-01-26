
const { Post } = require('../models');

const postData = [{
        title: 'Mountain Bike I',
        content: 'Nunc rhoncus dui vel sem.',
        user_id: 1

    },
    {
        title: 'Mountain Bike II',
        content: 'Aliquam erat volutpat. In congue.',
        user_id: 2
    },
    {
        title: 'Mountain Bike  III',
        content: 'Vivamus vestibulum sagittis sapien.',
        user_id: 3
    },

    {
        title: 'Mountain Bike  VI',
        content: 'Sed vel enim sit amet nunc viverra dapibus.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;