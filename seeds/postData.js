const { Post } = require("../models");

const postData = [
  {
    title: "We were NOT on a break!",
    content:
      "I wrote 18 pages front to back and Ross fell asleep reading it! I cannot believe I even thought about getting back together with him. WE ARE SO OVER.",
    user_id: 1,
  },
  {
    title: "Smelly Cat",
    content:
      "Smelly cat, smelly cat, what are they feeding you? Smelly cat, smelly cat, it's not your faaault!",
    user_id: 2,
  },
  {
    title: "Could I be anymore funny",
    content:
      "I'm Chandler, I make jokes when I'm unconfortable.",
    user_id: 3,
  },
  {
    title: "I'm FINE",
    content:
      "Someone at work ate my sandwhich. MYYYYYY SANDDWICCCCCCHHHHHHH! That sandwhich was the only good thing going on in my life.",
    user_id: 4,
  },
  {
    title: "Relationship tutor",
    content:
      "I'm tired of being the relationship tutor, he is going to have to figure it out for himself this time",
    user_id: 5,

  },
  {
    title: "Hot to pick up chicks",
    content:
      "How you doin? ;)",
    user_id: 6,
    
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;