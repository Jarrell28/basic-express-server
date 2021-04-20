'use strict';

module.exports = (req, res, next) => {
    if (req.query.name) {
        console.log(req.query);
        next()
    } else {
        next('Error occurred');
    }
}