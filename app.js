const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
var fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;
const logStream = fs.createWriteStream(path.join(__dirname + '.log'), {flag:"a"});
const urlRouter = require('./src/url/route.js');
const app = express();

global.cache = new Map();

app.set('view engine','ejs');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
morgan.token('body', function getId(req) {
    return JSON.stringify(req.body);
});
app.use(morgan(':status :method :url :response-time :body'));
app.use(morgan(':status :method :url :response-time :body', {stream:logStream}))

app.use("/", urlRouter)
app.get("/", (req,res)=>{
    return res.render("index",{path:""});
});

app.listen(port, ()=> {
    console.info("Sever runnng at:", port);
})