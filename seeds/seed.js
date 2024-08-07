const sequelize = require('../config/config');

// Import all models
const { User, Post, Comment } = require('../models');

// Import all seeds
const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

// Asynchronous function to seed the database
const seedDatabase = async () => {
  try {
    // Sync all models
    await sequelize.sync({ force: true });

    // Seed users first
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    console.log('Users seeded successfully');

    // Seed posts after users
    console.log('Seeding posts...');
    const posts = await Post.bulkCreate(
      postData.map((post) => ({
        ...post,
        user_id: users.find((user) => user.id === post.user_id)?.id, // Using optional chaining to handle potential undefined
      }))
    );
    console.log('Posts seeded successfully');

    // Seed comments after posts
    console.log('Seeding comments...');
    await Comment.bulkCreate(
      commentData.map((comment) => ({
        ...comment,
        user_id: users.find((user) => user.id === comment.user_id)?.id, // Using optional chaining to handle potential undefined
        post_id: posts.find((post) => post.id === comment.post_id)?.id, // Using optional chaining to handle potential undefined
      }))
    );
    console.log('Comments seeded successfully');

    // Log a success message
    console.log('Database seeding completed successfully');
  } catch (error) {
    // Log any errors that occur during seeding
    console.error('Error seeding database:', error);
  }
};

// Call the seeding function
seedDatabase();



