require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 6666;
const mongoose = require('mongoose');

// load models
require('./app/models/lopyRequests');

// connection to mongodb server
mongoose.Promise = global.Promise;
if(!process.env.MONGO_USERNAME || !process.env.MONGO_PASSWORD || (process.env.MONGO_USERNAME === "" && process.env.MONGO_PASSWORD === "")) {
    mongoose.connect('mongodb://' + process.env.MONGO_HOST + ':' + process.env.MONGO_PORT + '/' + process.env.MONGO_DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
}
else {
    mongoose.connect('mongodb://' + process.env.MONGO_USERNAME + ':' + process.env.MONGO_PASSWORD + '@' + process.env.MONGO_HOST + ':' + process.env.MONGO_PORT + '/' + process.env.MONGO_DATABASE , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
}

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//import routes
let lopyRequestsRoutes = require('./app/routes/lopyRequestsRoutes');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(lopyRequestsRoutes);

app.listen(port, () => {
    console.log(`RPI - Monitoring API server started on port : ${port}`);
});
