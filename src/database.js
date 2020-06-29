const mongoose = require("mongoose");

// el servicio de mongo en compose se difene como mongo
mongoose
  .connect("mongodb://mongo/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("DB es conectado a ", db.connection.host))
  .catch((err) => console.error(err));
