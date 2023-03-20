const Service = require('./service');

const getUser = (req, res) => res.status(200).json(Service.getUser());

module.exports = {
  getUser,
};
