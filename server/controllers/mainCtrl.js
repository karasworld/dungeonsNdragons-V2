const axios = require("axios");

let playerCharacters = [];
let name = "";
let race = [];
let class = [];


const raceSelection = (req, res, next)=>{
    axios
    .get("http://dnd5eapi.co/api/races")
    .then(response=>{
        console.log(response.data)
        res.json(response.data)
    }).catch(err=>console.log(err))
};

const classSelection = (req, res, next)=>{
    axios
    .get("http://dnd5eapi.co/api/classes")
    .then(res=>{
        console.log(res.data)
        res.json(res.data)
    }).catch(err=>console.log(err))
};


module.exports = {
    raceSelection,
    classSelection
};