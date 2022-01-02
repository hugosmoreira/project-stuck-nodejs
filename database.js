const mongoose = require("mongoose")



class Database {
    
    constructor() {
        this.connect();
    }


    connect() {
        mongoose.connect("")
        .then(() => {
            console.log("database connection successful")
        })
        .catch((err) => {
            console.log("database connection error" + err)
        })
    }
}


module.exports = new Database()