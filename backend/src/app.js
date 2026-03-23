const express = require('express');

const cors = require("cors");

const sequelize = require("./config/database");

const routes = require("./routes/processRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

const PORT = 3000;

sequelize.sync()
    .then(() => {

        app.listen(3000, () => {

            console.log("Server running");

        });

    });