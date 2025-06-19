"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dictionaryRouter_1 = __importDefault(require("./dictionaryRouter"));
const thesaurusRouter_1 = __importDefault(require("./thesaurusRouter"));
const router = (0, express_1.Router)();
// Mount the routers directly
router.use("/dictionary", dictionaryRouter_1.default);
router.use("/thesaurus", thesaurusRouter_1.default);
// Health check route
router.get("/health", (_req, res, _next) => {
    res.status(200).json({
        status: "OK",
        timestamp: new Date().toISOString(),
        service: "WordHub API",
    });
});
// // 404 handler for unmatched API routes
// router.use("/*", (req, res) => {
//   res.status(404).json({
//     error: "API route not found",
//     path: req.originalUrl,
//     availableRoutes: [
//       "/api/dictionary/:word",
//       "/api/thesaurus/:word",
//       "/api/health",
//     ],
//   });
// });
exports.default = router;
