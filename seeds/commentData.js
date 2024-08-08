const { Comment } = require('../models');

const commentData = [{
        comment_text: "Men never change",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "What a great song!",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Sarcastic jokes are funny",
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: "You should see a therapist",
        user_id: 4,
        post_id: 4
    },
    {
        comment_text: "And he still hasn't figured it out",
        user_id: 5,
        post_id: 5
    },
    {
        comment_text: "Works everytime",
        user_id: 6,
        post_id: 6
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;