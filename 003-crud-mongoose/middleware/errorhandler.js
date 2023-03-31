const errorHandler = (err, req, res, next) => {
    res.status(200).send(err.message);
}

module.exports = errorHandler;