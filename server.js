const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models");
require('dotenv').config();
require("./seeders/seed.js");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

app.use(logger("dev"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
