/*!
Routes handling requests related to surveys access and processing
*/

import express from 'express';
import passport from 'passport';
const router = express.Router();

// import { AuthGuard, EditGuard } from '../Util';  // Replaced by protecting entire route with JWT

import { DisplayAddPage, DisplaySurveys, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../controllers/surveys'

// Surveys Page GET request 
// Temp remove Authguard for api conversion ^v
router.get('/survey-list', DisplaySurveys);


// Add Page GET request
// router.get('/add', AuthGuard, DisplayAddPage);
router.get('/surveys/add', DisplayAddPage);

// Edit Page Get request
// router.get('/edit/', AuthGuard, EditGuard);
// router.get('/edit/:id', AuthGuard, DisplayEditPage);
router.get('/surveys/edit/:id', DisplayEditPage);

// Process Add Page POST request
//router.post('/add', AuthGuard, ProcessAddPage);
router.post('/surveys/add', passport.authenticate('jwt', {session: false}), ProcessAddPage);

// Process Edit Page POST request
// router.post('/edit/:id', AuthGuard, ProcessEditPage);
router.post('/surveys/edit/:id', passport.authenticate('jwt', {session: false}), ProcessEditPage);

// Process Delete Page GET request
// router.get('/delete/:id', AuthGuard, ProcessDeletePage);
router.get('/surveys/delete/:id', passport.authenticate('jwt', {session: false}), ProcessDeletePage);

export default router;