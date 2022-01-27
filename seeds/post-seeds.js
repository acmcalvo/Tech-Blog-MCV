const { Post } = require('../models');

const postData = [
    {
        title: "Test_1",
        post_content: "Test1",
        user_id: 1
    },
    {
        title: "Test_2!",
        post_content: "Test2",
        user_id: 2
    },
    {
        title: "Test_3",
        post_content: "Test3",
        user_id: 5

    },
    {
        title: "Test_4",
        post_content: "Test4",
        user_id: 4
    },
    {
        title: "Test_5",
        post_content: "Test5",
        user_id: 5
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;