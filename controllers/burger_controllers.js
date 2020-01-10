var express = require("express");
var burger = require("../models/burger");
var router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {
        // var burgerObj = {
        //     burger: data
        // };
        // console.log(data);
        res.render("index", { burgers: data });
    });
});

router.post("/api/post", function (req, res) {
    burger.add(["burger"], [req.body.name], function (data) {
        res.json({ id: data });
    })
});

router.put("/api/:id", function (req, res) {

    var condition = "id = " + req.params.id;

    burger.update(
        {
            devour: req.body.devour
        },
        condition,
        function (data) {
            var burgerObj = {
                burger: data
            }
            res.status(200).end();
        })
})

module.exports = router;