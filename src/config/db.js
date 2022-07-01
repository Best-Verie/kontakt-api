const mongoose = require("mongoose");
const dbConnect = async () => {
  mongoose.connect("mongodb://localhost:27017/contakt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = dbConnect;
