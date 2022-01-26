const { Comment } = require('../models');

const commentData = [{
        comment_text: "Nunc rhoncus dui vel sem.",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: ">lorem ipsum",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "In hac habitasse platea dictumst.",
        user_id: 3,
        post_id: 3
    },

    {
        comment_text: "sSed vel enim sit amet nunc viverra dapibus.",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;