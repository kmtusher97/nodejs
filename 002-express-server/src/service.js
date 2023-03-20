const data = require('./data');

const getUser = () => data.users;

const getUserById = ({ userId }) => {
  const user = data.users.find((user) => user.id === userId);
  if (!user) {
    throw new Error('not found!!!');
  }
  return { name: user.name, age: user.age };
};

module.exports = { getUser, getUserById };
