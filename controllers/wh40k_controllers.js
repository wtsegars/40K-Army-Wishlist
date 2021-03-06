const express = require('express');

const wh40k = require('../models/wh40k');

const router = express.Router();


router.get("/", function(req, res) {
    wh40k.selectAll(function(data) {
        res.render("index", {figures: data});
    });
});

router.post("/api/wh40k", function(req, res) {
    console.log(req.body.figure_name);
    wh40k.insertOne(["figure_name", "faction", "role", "own"], [req.body.figure_name, req.body.faction, req.body.role, req.body.own], function(data) {
        res.json({ figure_name: data.insertName });
    });
});

router.put("/api/wh40k/:own", function(req, res) {
    let condition = "own = " + req.params.own;
    console.log(condition);
    wh40k.updateOne(
        {
            own: req.body.own
        },
        condition,
        function(result) {
            if(result === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;