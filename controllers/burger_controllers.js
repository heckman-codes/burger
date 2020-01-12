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

router.post("/api/burger", function (req, res) {
    console.log(req.body.burger);
    burger.add(["burger"], [req.body.burger], function (data) {
        res.json(data);
    })
});

router.put("/api/burger/:id", function (req, res) {

    var condition = "id = " + req.params.id;

    burger.update(
        {
            devour: req.body.devour
        },
        req.params.id,
        function (data) {
            var burgerObj = {
                burger: data
            }
            res.status(200).send(burgerObj).end();
        })
})

router.delete("api/burger/:id", function (req, res) {
    burger.deleteOne(req.params.id, function (result) {
        res.redirect("/");
    });
});

module.exports = router;