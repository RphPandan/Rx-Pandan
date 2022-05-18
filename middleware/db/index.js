require('dotenv').config();
// require("./events");
const mongoose = require('mongoose');

const mongoConnection = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    console.log('already connected to database');
    return handler(req, res);
  }
  // Use new db connection
  await mongoose
    .connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log('connected to database');
    });
  return handler(req, res);
};

// mongoose.connection.on("close", () => {
//   console.log("bye");
// });

export default mongoConnection;
