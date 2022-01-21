const mongoose = require("mongoose")



class Database {
    
    constructor() {
        this.connect();
    }


    connect() {
        mongoose.connect("mongodb+srv://admin:admin123456@stuck-app.mysz6.mongodb.net/stuck-app?retryWrites=true&w=majority")
        .then(() => {
            console.log("database connection successful")
        })
        .catch((err) => {
            console.log("database connection error" + err)
        })
    }
}



module.exports = new Database()