"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pollRoutes = void 0;
const express_1 = require("express");
const poll_controllers_1 = require("../controllers/poll.controllers");
const router = (0, express_1.Router)();
router.post("/create-poll", poll_controllers_1.pollController.createPoll);
router.get("/:slug", poll_controllers_1.pollController.getPollBySlug);
router.patch("/:id", poll_controllers_1.pollController.updatePoll);
exports.pollRoutes = router;
