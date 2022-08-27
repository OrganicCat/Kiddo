const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 8000;
const app = express();
const mainRoutes = require("./controllers/mainRoutes");
const forgotPassword = require("./controllers/forgotPassword")

// ** MIDDLEWARE ** //
const whitelist = ['http://localhost:3000', 'http://localhost:8000', 'https://kiddo-investors.herokuapp.com']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    
    app.get('*', function ( req , res ) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    })
}


app.use(cors(corsOptions))
app.use(express.json())
app.use(mainRoutes)
// app.use(forgotPassword)

module.exports = app;