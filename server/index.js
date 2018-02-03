const express = require("express");
const {json} = require("body-parser");
const cors = require("cors");
const mainCtrl = require("./controllers/mainCtrl");
const axios = require("axios");

const port = 3001;

const app = express();

app.use(json());
app.use(cors())


//CRUD endpoints
//        front     bridge       back

app.get("api/race", mainCtrl.raceSelection);
app.get("api/class", mainCtrl.classSelection);


app.listen(port, ()=>{
    console.log(`Now pay attention Port:${port}!`);
});