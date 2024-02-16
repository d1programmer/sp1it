const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session');

const app = express();


app.use(express.json());
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false
}));
app.get('/', function(req, res) {
    res.send("Welcome to Split");
});

app.listen(8080,()=>console.log("Server is running"));
