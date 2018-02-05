const axios = require("axios");


let playerCharacter = [];



function getPlayerRace(){
    return axios.get("http://dnd5eapi.co/api/races");
}
function getPlayerClass(){
    return axios.get("http://dnd5eapi.co/api/classes");
}
function getPlayerSkill1(){
    return axios.get("http://dnd5eapi.co/api/skills");
}
function getPlayerSkill2(){
    return axios.get("http://dnd5eapi.co/api/skills");
}
function getEquipment1(){
    return axios.get("http://dnd5eapi.co/api/equipment/");
}
function getEquipment2(){
    return axios.get("http://dnd5eapi.co/api/equipment/");
}
function getEquipment3(){
    return axios.get("http://dnd5eapi.co/api/equipment/");
}

//PLAYER CHARACTERS
const getPlayer = (req, res, next)=>{
    
    axios
    .all([getPlayerRace(), getPlayerClass(), getPlayerSkill1(), getPlayerSkill2(), getEquipment1(), getEquipment2(), getEquipment3()])
        .then(axios.spread(function(pRace, pClass, pSkill1, pSkill2, pEquip1, pEquip2, pEquip3){  
            let playerCharacter = {pRace: pRace.data.results, pClass: pClass.data.results, pSkill1: pSkill1.data.results, pSkill2: pSkill2.data.results,pEquip1: pEquip1.data.results, pEquip2: pEquip2.data.results, pEquip3: pEquip3.data.results};
            res.status(200).json(playerCharacter)         
        }));
        
    };

const playerAddition = (req, res, next)=>{
    console.log("made it")
    playerCharacter.push(req.body);
    res.json(playerCharacter)
    console.log(playerCharacter, req.body)
};
const playerUpdate=(req, res, next)=>{
    const {id}=req.params;
    playerCharacter[id]=Object.assign({}, playerCharacter[id], {name:req.body.name},
    {bio:req.body.bio});
    res.json(playerCharacter)  
    console.log(playerCharacter, "hey hey")  
};


const death = (req, res, next)=>{
    const{id}=req.params;
   playerCharacter.splice(id, 1);
    res.json(playerCharacter)
}


module.exports = {
    getPlayer,
    playerAddition,
    playerUpdate,
    death
};