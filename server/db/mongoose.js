var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect(
  "mongodb://tomkek:Kanibalek12@ds125272.mlab.com:25272/todoapp"
);

module.exports = { mongoose };
