"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NODE_ENV = exports.THESUAURUS_API_KEY = exports.DICTIONARY_API_KEY = void 0;
const node_process_1 = __importDefault(require("node:process"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./.env" });
_a = node_process_1.default.env, exports.DICTIONARY_API_KEY = _a.DICTIONARY_API_KEY, exports.THESUAURUS_API_KEY = _a.THESUAURUS_API_KEY;
exports.NODE_ENV = node_process_1.default.env.NODE_ENV;
