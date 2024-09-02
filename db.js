const mongoose = require("mongoose")

module.exports = () =>{
    mongoose.connect('mongodb://localhost:27017/clothing-store').then(()=>{
        console.log("[+] connected to mongoDb");
    }).catch((err) =>{
        console.log("[+] Could not connect to DB");
        console.log(err);
    })
}