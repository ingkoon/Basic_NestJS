"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_model_1 = require("./app.model");
var app = express();
var data = [1, 2, 3, 4];
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log("this is logging middleware!");
    next();
});
app.use(express.json());
app.get("/cats", function (req, res) {
    try {
        var cats = app_model_1.Cat;
        res.status(200).send({
            success: true,
            data: {
                cats: cats,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
app.get("/cats/:id", function (req, res) {
    try {
        var params_1 = req.params;
        console.log(params_1);
        var cat = app_model_1.Cat.find(function (cat) {
            return cat.id == params_1.id;
        });
        res.status(200).send({
            success: true,
            data: {
                cat: cat,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
app.post("/cats", function (req, res) {
    try {
        var data_1 = req.body;
        console.log(data_1);
        app_model_1.Cat.push(data_1);
        res.status(200).send({
            success: true,
            data: {},
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
app.get("/", function (req, res) {
    res.send({ cats: app_model_1.Cat });
});
app.use(function (req, res, next) {
    console.log("this is logging middleware!");
    res.send({ error: "404 not found error" });
    next();
});
app.listen(8000, function () {
    console.log("server is on ...");
});
//# sourceMappingURL=app.js.map