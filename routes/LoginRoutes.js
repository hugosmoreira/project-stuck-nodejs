const express = require('express');
const app = express();
const router = express.router();


app.set("view engine", "pug")
app.set("views", "views")


// Routes

const loginRoute = require('./routes/loginRoutes')

app.use("/login", loginRoute)

router.get("/",  (req, res, next) => {

    let payload = {
        pageTitle: "Home"
    }

    res.status(200).render("home", payload)
})

module.exports = router;