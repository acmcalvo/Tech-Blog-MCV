const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Exercitation eu reprehenderit in id voluptate nostrud fugiat dolore eu excepteur ullamco mollit dolore.",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "Dolore ut cillum duis exercitation amet nisi culpa adipisicing aute aute.",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "In do ut culpa irure eu ipsum labore aliquip cillum commodo et non.",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "Proident qui sit nulla incididunt nisi mollit consequat id fugiat voluptate duis ad culpa.",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "Pariatur ea amet commodo amet ipsum excepteur id consequat Lorem eiusmod est irure ea.",
    post_id: 5,
    user_id: 5
  },
  {
    comment_text: "Cupidatat consectetur nisi consectetur mollit nulla cupidatat consectetur ex eiusmod consequat do mollit officia mollit. ",
    post_id: 5,
    user_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;