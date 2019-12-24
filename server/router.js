'use strict';

const indexRouter = require('./routes/index');

module.exports = app => {
    app.use('/', indexRouter);
};