"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getThesaurusWord = void 0;
const axios_1 = __importDefault(require("axios"));
const getThesaurusWord = async (word) => {
    const THESAURUS_URL = "https://dictionaryapi.com/api/v3/references/thesaurus/json";
    const { data } = await (0, axios_1.default)({
        // url: `${THESAURUS_URL}/${word}?key=${THESUAURUS_API_KEY}`,
        url: `${THESAURUS_URL}/${word}?key=1e577b8b-fa24-422a-989a-929b08509646`,
        method: "GET",
    });
    return data;
};
exports.getThesaurusWord = getThesaurusWord;
