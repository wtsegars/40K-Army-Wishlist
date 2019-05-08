const express = require('express');

const wh40k = require('../models/wh40k');

const router = express.router();

router.get("/", function(req, res) {
    wh40k.all(function(data) {
        let hbsObject = {
            wh40k: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/wh40k", function(req, res) {
    wh40k.create(["figure_name", "faction", "role", "own"], [req.body.figureName, req.body.faction, req.body.role, req.body.own])
})