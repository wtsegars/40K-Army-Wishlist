const express = require('express');

const wh40k = require('../models/wh40k');

const router = express.Router();


router.get("/", function(req, res) {
    wh40k.selectAll(function(data) {
        let hbsObject = {
            wh40k: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/wh40k", function(req, res) {
    wh40k.insertOne(["figure_name", "faction", "role", "own"], [req.body.figureName, req.body.faction, req.body.role, req.body.own], function(data) {
        res.json({ figure_name: data.insertName });
    });
});

router.put("/api/wh40k/:name", function(req, res) {
    let condition = "name = " + req.params.figure_name;

    wh40k.updateOne(
        {
            figure_name: req.body.figure_name,
            faction: req.body.faction,
            role: req.body.role,
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