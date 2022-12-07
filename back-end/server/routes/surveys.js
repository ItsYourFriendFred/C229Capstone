"use strict";
/*!
Routes handling requests related to surveys access and processing
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const router = express_1.default.Router();
const surveys_1 = require("../controllers/surveys");
router.get('/survey-list', surveys_1.DisplaySurveys);
router.get('/surveys/add', surveys_1.DisplayAddPage);
router.get('/surveys/edit/:id', surveys_1.DisplayEditPage);
router.post('/surveys/add', passport_1.default.authenticate('jwt', { session: false }), surveys_1.ProcessAddPage);
router.post('/surveys/edit/:id', passport_1.default.authenticate('jwt', { session: false }), surveys_1.ProcessEditPage);
router.post('/surveys/answer/:id', surveys_1.ProcessAnswerPage);
router.get('/surveys/delete/:id', passport_1.default.authenticate('jwt', { session: false }), surveys_1.ProcessDeletePage);
exports.default = router;
//# sourceMappingURL=surveys.js.map