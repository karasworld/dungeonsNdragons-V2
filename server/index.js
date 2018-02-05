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

app.get("/api/all", mainCtrl.getPlayer);
app.post("/api/all", mainCtrl.playerAddition);
app.put("/api/all/:id", mainCtrl.playerUpdate);
app.delete("/api/all/:id", mainCtrl.death);

app.listen(port, ()=>{
    console.log(`Now pay attention Port:${port}!`);
});