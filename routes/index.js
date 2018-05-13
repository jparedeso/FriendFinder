const express = require("express");
const router = express.Router();
const _ = require("lodash");
let friends = require("../models/model");

router.get("/", (req, res, next) => {
        res.render("dashboard/index")
});

router.get("/survey", (req, res, next) => {
    res.render("survey/survey.hbs")
});

router.get("/api/friendFinder", (req, res, next) => {
    res.json(friends);
});

router.post("/api/friendFinder", (req, res, next) => {
    const friend = req.body;
    const scores = [];
    _.each(friends, friend => {
        const sum = _.reduce(_.pick(friend, ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"]), function (sum, n) {
            return sum + parseInt(n);
        }, 0);

        scores.push(sum);
    });

    const score = _.reduce(_.pick(friend, ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"]), function (sum, n) {
        return sum + parseInt(n);
    }, 0);

    let diff = 999;
    let index = -1;
    _.each(scores, (scr, i) => {
            var df = Math.abs(score - scr);
            if (df < diff) {
                diff = df;
                index = i;
            }
    });

    friends.push(friend);

    res.json(friends[index]);
});

module.exports = router;