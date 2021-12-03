const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require("path")
const app = express();

app.set('port', process.env.PORT || 3000)

app.set('views', path.join(__dirname, "views"))
app.use("/static", express.static(path.join(__dirname, 'public')))
app.set("view engine", "ejs")

app.use(morgan("dev"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Routes
require("./routes/index")(app);

app.listen(app.get("port"), () => {
    console.log(`server on port ${app.get("port")}`)
})