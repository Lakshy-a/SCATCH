const mongoose = require("mongoose");

mongoose
.connect("mongodb+srv://lakshyagupta:2001430130044@cluster0.f4hphxr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then((result) => {
    console.log("Mongodb connected successfully...");
})
.catch((err) => {
    console.log(err); 
});

module.exports = mongoose.connection;