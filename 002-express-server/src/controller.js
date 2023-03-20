const getUser = (req, res) => {
  res.status(200).json({
    name: 'Adam Wils',
    age: 50,
    address: {
      country: 'USA',
      state: 'Texas',
    },
  });
};

module.exports = {
  getUser,
};
