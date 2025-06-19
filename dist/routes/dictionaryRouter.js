"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dictionary_1 = require("../services/dictionary");
const dictionaryRouter = (0, express_1.Router)();
dictionaryRouter.get('/:word', async (req, res, next) => {
    const { word } = req.params;
    console.log('word in dictionary router', word);
    try {
        res.json(await (0, dictionary_1.getDictionaryWord)(word));
    }
    catch (error) {
        console.log('Error getting dictionary word', error);
        next(error);
    }
});
exports.default = dictionaryRouter;
