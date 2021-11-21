const http = require("http");
const fileUpload = require("express-fileupload");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const cors = require("cors");
const mongoose = require("mongoose");

/* Config */
const ConfigDB = require("./config");

/* Routers */
const routes = require("./routes/index");
const user = require("./routes/user/");
const country = require("./routes/country/");
const laboratory = require("./routes/laboratory/");
const stain = require("./routes/stain/");
const group = require("./routes/group/");

/* Middlewares */
const auth = require("./middlewares/auth");

const app = express();
app.set("trust proxy", 1);

app.use(express.static(path.join(__dirname, "../client/build")));

app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use(cors());
app.use(fileUpload());

app.use(
  cookieSession({
    name: "session",
    keys: ["llave-1"],
  })
);

app.use("/api", user);
app.use("/api", laboratory);
app.use("/api", auth, country);
app.use("/api", stain);
app.use("/api", group);

app.use("/", routes);

mongoose.connect(ConfigDB.db, (err, res) => {
  if (err) {
    return console.log(`Error al conectar a la base de datos: ${err}`);
  }
  console.log("Conexión a la base de datos establecida...");

  app.listen(8028, () => {
    console.log(`API REST corriendo en http://localhost:${8028}`);
  });
});
