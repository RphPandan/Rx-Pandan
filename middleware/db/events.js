const mongoose = require("mongoose");

mongoose.connection.on("close", () => {
  console.log("bye");
});
