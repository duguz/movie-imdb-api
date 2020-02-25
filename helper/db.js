const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb://duguz:Derya123456@ds051883.mlab.com:51883/heroku_rlf86h2l', { useMongoClient: true});

  mongoose.connection.on('open', () => {
    console.log('MongoDB: Connected');
  });
  mongoose.connection.on('error', (err) => {
    console.log('MongoDB: Error', err);
  });

  mongoose.Promise = global.Promise;
};
