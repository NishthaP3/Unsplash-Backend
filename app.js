const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');
var args = process.argv.slice(2);
////
// get port from start script
//var args = process.argv.slice(2);

const app = express();
app.use(bodyParser.json());

const corsOpts = {
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH', 'OPTION'],
};

app.use(cors(corsOpts));
//test
// connect to db
mongoose.connect('mongodb+srv://ripal:nopassword@cluster0.wazghlk.mongodb.net/?retryWrites=true&w=majority',
    () => {
        try {
            console.log("Connected to DB!")
        }catch (e){
            console.log(e);
        }
    }
)

// import routes
const imageRoutes = require('./routes/images');

app.use('/images', imageRoutes);
console.log("Port!")
console.log(args[1])
// listen to request
//app.listen(8000)
app.listen(args[1], '0.0.0.0')
