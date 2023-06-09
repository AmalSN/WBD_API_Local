const path = require('path');
const fs = require('fs');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const User = require("./../model/userDetails.js");
const Stat = require("./../model/statDetails.js");

let ticFunc = async (req, res) => {
    let x = await Stat.find({},"uName wins").limit(6);
    x = x.map(l => {
        return {_id: l._id, uName: l.uName, wins: l.wins[0], pic: `/profilePic/${l.uName}.png`}
    })
    x.sort(function(a,b){
        if (a.wins > b.wins) {
            return -1;
        }
        if (a.wins < b.wins) {
            return 1;
        }
        return 0;
    })
    // res.header({"Allow-Control-Allow-Origin":"*","Content-Type":"application/json"})
    res.status(200)
    res.json(x)
}

let snakeFunc = async (req, res) => {
    let x = await Stat.find({},"uName wins").limit(6);
    x = x.map(l => {
        return {_id: l._id, uName: l.uName, wins: l.wins[1], pic: `/profilePic/${l.uName}.png`}
    })
    x.sort(function(a,b){
        if (a.wins > b.wins) {
            return -1;
        }
        if (a.wins < b.wins) {
            return 1;
        }
        return 0;
    })
    res.status(200)
    res.json(x)
}

let ludoFunc = async (req, res) => {
    let x = await Stat.find({},"uName wins").limit(6);
    x = x.map(l => {
        return {_id: l._id, uName: l.uName, wins: l.wins[2], pic: `/profilePic/${l.uName}.png`}
    })
    x.sort(function(a,b){
        if (a.wins > b.wins) {
            return -1;
        }
        if (a.wins < b.wins) {
            return 1;
        }
        return 0;
    })
    res.status(200)
    res.json(x)
}

module.exports = {
    ticFunc: ticFunc,
    snakeFunc: snakeFunc,
    ludoFunc: ludoFunc
}