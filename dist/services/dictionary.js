"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDictionaryWord = void 0;
const axios_1 = __importDefault(require("axios"));
const env_1 = require("../constants/env");
const getDictionaryWord = async (word) => {
    const DICTIONARY_URL = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json';
    const { data } = await (0, axios_1.default)({
        url: `${DICTIONARY_URL}/${word}?key=${env_1.DICTIONARY_API_KEY}`,
        method: 'GET',
    });
    return data;
};
exports.getDictionaryWord = getDictionaryWord;
