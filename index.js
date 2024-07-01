const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const PORT = process.env.PORT || 3000 ;
const bodyParser = require("body-parser");
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

const db = require("./config/mongoose-connection");

app.use('/owners', ownersRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
})