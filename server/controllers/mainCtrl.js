const axios = require("axios");

let races = [];
let classes = [];
let skills = [];
let playerCharacter = [];



function getPlayerRace(){
    return axios.get("http://dnd5eapi.co/api/races");
}
function getPlayerClass(){
    return axios.get("http://dnd5eapi.co/api/classes");
}
function getPlayerSkill(){
    return axios.get("http://dnd5eapi.co/api/skills");
}

//PLAYER CHARACTERS
const getPlayer = (req, res, next)=>{
    axios
    .all([getPlayerRace(), getPlayerClass(), getPlayerSkill()])
        .then(axios.spread(function(pRace, pClass, pSkill){  
            // console.log(pRace.data, pClass.data, pSkill.data,"here here") 
            let playerObj = {pRace: pRace.data.results, pClass: pClass.data.results, pSkill: pSkill.data.results};
            res.status(200).json(playerObj)         
        }))
}
const playerAddition = (req, res, next)=>{
    console.log("made it")
    playerCharacter.push(req.body);
    res.json(playerCharacter)
    console.log(playerCharacter, req.body)
};
const playerUpdate=(req, res, next)=>{
    const {id}=req.params;
    playerCharacter[id]=Object.assign({}, playerCharacter[id], {name:req.body.name});
    res.json(playerCharacter)
    
};




//RACE
// const getRace = (req, res, next)=>{
//     axios
//     .get("http://dnd5eapi.co/api/races")
//     .then(response=>{
//         console.log(response.data)
//         races=response.data.results;
//         res.status(200).json(races)
//     }).catch(err=>console.log(err))
// };
// const raceAddition = (req, res, next) => {
//     races.push(req.body);
//     res.json(races)
// };
// const raceUpdate = (req ,res, next) => {
//     const { id } =req.params;
//     races[id] = Object.assign({}, races[id], { name: req.body.name});
//     res.json(races);
// };


//CLASS
// const getClass = (req, res, next)=>{
//     axios
//     .get("http://dnd5eapi.co/api/classes")
//     .then(response=>{
//         console.log(response.data)
//         classes=response.data;
//         res.status(200).json(classes)
//     }).catch(err=>console.log(err))
// };
// const classAddition = (req, res, next)=>{
//     classes.push(req.body);
//     res.json(classes)
// };
// const classUpdate = (req, res, next)=>{
//     const{id}=req.params;
//     classes[id]=Object.assign({}, classes[id], {name: req.body.name});
//     res.json(classes);
// }



//SKILL
// const getSkill = (req, res, next)=>{
//     axios
//     .get("http://dnd5eapi.co/api/skills")
//     .then(response=>{
//         console.log(response.data)
//         skills=response.data;
//         res.status(200).json(skills)
//     }).catch(err=>console.log(err))
// };
// const skillAddition = (req, res, next)=>{
//     skills.push(req.body);
//     res.json(skills)
// };
// const skillUpdate = (req, res, next)=>{
//     const{id}=req.params;
//     skills[id]=Object.assign({}, skills[id], {name: req.body.name});
//     res.json(skills);
// }



const death = (req, res, next)=>{
    const{id}=req.params;
   races.splice(id, 1);
    res.json(races)
}


module.exports = {
    // getRace,
    // getClass,
    // getSkill,
    // raceAddition,
    // classAddition,
    // skillAddition,
    // raceUpdate,
    // classUpdate,
    // skillUpdate,
    getPlayer,
    playerAddition,
    playerUpdate,
    death
};