const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await User.deleteMany({});

  await Thought.deleteMany({});

  const users = [
    {
        "username": "test",
        "email": "test@gmail.com"
    },
    {
        "username": "test2",
        "email": "test2@gmail.com"
    },
    {
        "username": "test3",
        "email": "test3@gmail.com"
    },
    {
        "username": "test4",
        "email": "test4@gmail.com"
    },
    {
        "username": "test5",
        "email": "test5@gmail.com"
    },
  ];


  const thoughts = [
    {
        "thoughtText": "blahblahblah",
        "username": "test"
    },
    {
        "thoughtText": "blahblahblah",
        "username": "test2"
    },
    {
        "thoughtText": "blahblahblah",
        "username": "test3"
    },
    {
        "thoughtText": "blahblahblah",
        "username": "test4"
    },
    {
        "thoughtText": "blahblahblah",
        "username": "test5"
    }
  ];


await User.collection.insertMany(users);

await Thought.collection.insertMany(thoughts);


})