const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const fs = require('fs').promises;
const path = require('path');

const seedUsers = async () => {
    const data = await fs.readFile(path.join(__dirname, 'seedUserData.json'), 'utf8');
    const users = JSON.parse(data);
    await User.bulkCreate(users, {
        individualHooks: true,
        returning: true,
    });
};

const seedPosts = async () => {
    const data = await fs.readFile(path.join(__dirname, 'seedPostData.json'), 'utf8');
    const posts = JSON.parse(data);
    await Post.bulkCreate(posts);
};

const seedComments = async () => {
    const data = await fs.readFile(path.join(__dirname, 'seedCommentsData.json'), 'utf8');
    const comments = JSON.parse(data);
    await Comment.bulkCreate(comments);
};

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUsers();
    console.log('Users seeded');

    await seedPosts();
    console.log('Posts seeded');

    await seedComments();
    console.log('Comments seeded');

    process.exit(0);
};

seedAll();
