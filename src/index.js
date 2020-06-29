const express = require("express");

const app = express();

require("./database");

app.use(require("./routes/index.routes"));

app.listen(3000, () => console.log("Conectado en el puerto 3000"));
