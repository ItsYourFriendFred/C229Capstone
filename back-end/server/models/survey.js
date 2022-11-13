"use strict";
/*!
Defining a schema for a survey for MongoDB
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const SurveySchema = new Schema({
    title: String,
    author: String,
    dateStart: Date,
    dateEnd: Date,
    isActive: Boolean
}, {
    collection: "surveys"
});
SurveySchema.index({ title: 1 });
const Model = mongoose_1.default.model("Survey", SurveySchema);
exports.default = Model;
//# sourceMappingURL=survey.js.map