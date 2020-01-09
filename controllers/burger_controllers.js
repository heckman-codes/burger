var express = require("express");
var burger = require("../models/burger");
var router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {
        var burgerObj = {
            burger: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj);
    });
});

router.post("/", function (req, res) {
    burger.add(["burger"], [req.body.name], function (data) {
        var burgerObj = {
            burger: data
        }
        res.json({ id: result.insertId });
    })
});

router.put("/", function (req, res) {

    var condition = "id = " + req.params.id;

    burger.update(
        {
            devour: req.body.devour
        },
        function (data) {
            var burgerObj = {
                burger: data
            }
        })
})

module.exports = router;