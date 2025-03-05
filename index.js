const express = require("express")
const app = express();
const mongoose = require("mongoose")
const userRoutes = require("./routes/user.route")
const productRoutes = require("./routes/product.route")

const portNo = 5000;
const DB_URL = "mongodb://127.0.0.1:27017/ecommerce";

//Global Middlewares
app.use(express.json());

// Modular routes
app.use("/api/v1/user",userRoutes)
app.use("/api/v1/product",productRoutes)

mongoose
    .connect(DB_URL)
    .then(() => console.log(`DB Connected successfully`))
    .catch(err => console.error("ERROR While Connecting DataBase", err))

app.listen(portNo, () => console.log(`eComm services are up and running at port ${portNo}`))
