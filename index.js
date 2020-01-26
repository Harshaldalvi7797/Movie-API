let express = require("express");
let app = express();
let mongoose = require("mongoose");
let genre = require("./routes/movie/genre");
let movie = require("./routes/movie/movie");



let port = 4800 || process.env.port;
app.use(express.json());

mongoose.connect("mongodb://localhost/HHD", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connected"))
    .catch((error) => console.log(`something went wrong ${error.message}`));

app.listen(port, () => console.log(`connected to port`));

app.use("/api", genre);
app.use("/api", movie);