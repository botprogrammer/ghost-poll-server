"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pollController = void 0;
const mongodb_1 = require("mongodb");
const db_1 = require("../config/db");
const generateSlug_1 = require("../helpers/generateSlug");
const utils_1 = require("../lib/utils");
const createPoll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const { question, options } = data, restData = __rest(data, ["question", "options"]);
    const modifiedOptions = options.map((option) => ({
        id: (0, utils_1.generateId)(8),
        value: option.value,
        votes: 0,
    }));
    const slug = (0, generateSlug_1.generateSlug)(question);
    const payload = Object.assign(Object.assign({ question,
        slug, options: modifiedOptions }, restData), { reactions: {
            likes: 0,
            trending: 0,
        }, totalVotes: 0, createdAt: new Date() });
    const result = yield db_1.db.collection("polls").insertOne(payload);
    const insertedPoll = yield db_1.db
        .collection("polls")
        .findOne({ _id: result.insertedId });
    res.status(201).json({
        message: "Poll created successfully",
        data: insertedPoll,
    });
});
const getPollBySlug = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { slug } = req.params;
    const result = yield db_1.db.collection("polls").findOne({
        slug,
    });
    console.log(result);
    if (!result) {
        res.status(404).json({
            message: "Poll not found",
            data: null,
        });
        return;
    }
    res.status(200).json({
        message: "Poll retreived successfully",
        data: result,
    });
});
const updatePoll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body;
    delete data._id;
    const response = yield db_1.db.collection("polls").findOneAndUpdate({
        _id: new mongodb_1.ObjectId(id),
    }, { $set: data }, { upsert: true, returnDocument: "after" });
    res.status(200).json({
        message: "Poll updated successfully",
        data: response,
    });
});
exports.pollController = {
    createPoll,
    getPollBySlug,
    updatePoll,
};
