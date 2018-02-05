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


// app.get("/api/races", mainCtrl.getRace);
// app.post("/api/races", mainCtrl.raceAddition);
// app.put("/api/races/:id", mainCtrl.raceUpdate);

// app.get("/api/classes", mainCtrl.getClass);
// app.post("/api/classes", mainCtrl.classAddition);
// app.put("/api/classes/:id", mainCtrl.classUpdate);

// app.get("/api/skills", mainCtrl.getSkill);
// app.post("/api/skills", mainCtrl.skillAddition);
// app.put("/api/skills/:id", mainCtrl.skillUpdate);



app.delete("/api/races/:id", mainCtrl.death);

app.listen(port, ()=>{
    console.log(`Now pay attention Port:${port}!`);
});