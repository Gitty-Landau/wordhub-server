"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const thesaurus_1 = require("../services/thesaurus");
const thesaurusRouter = (0, express_1.Router)();
thesaurusRouter.get("/:word", async (req, res, next) => {
    const { word } = req.params;
    try {
        res.json(await (0, thesaurus_1.getThesaurusWord)(word));
    }
    catch (error) {
        console.log("Error getting thesaurus word", error);
        next(error);
    }
});
exports.default = thesaurusRouter;
