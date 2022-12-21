const connection = require('../config/conection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    await User.deleteMany({});
    await Thought.deleteMany({});

    const userSet = [
        {
            username: 'testUser1',
            email: 't1@test.com',
        },
        {
            username: 'testUser2',
            email: 't2@test.com',
        },
        {
            username: 'testUser3',
            email: 't3@test.com',
        }
    ]

    const thoughtSet = [
        {
            thoughtText: 'This is test thought! Hi!',
            username: 'testUser1'
        },
        {
            thoughtText: 'I like to eat waffles. Also test thought!',
            username: 'testUser2',
        },
        {
            thoughtText: 'This is a cool application (test thought as well)',
            username: 'testUser3',
        },
        {
            thoughtText: 'Luke I am your test thought',
            username: 'testUser1'
        },
    ]
    
    await User.collection.insertMany(userSet)
    await Thought.collection.insertMany(thoughtSet)

  // Log out the seed data to indicate what should appear in the database
  console.info('Seeding complete! 🌱');
  process.exit(0);
});