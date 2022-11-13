/*!
Routes handling requests related to surveys access and processing
*/

import express from 'express';
const router = express.Router();

// import { AuthGuard, EditGuard } from '../Util';  // Replaced by protecting entire route with JWT

import { DisplayAddPage, DisplaySurveys, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../controllers/surveys'

// Display Business Contacts Page
router.get('/surveys', DisplaySurveys);
// Temp remove Authguard for api conversion ^v

// Display Add Page
// router.get('/add', AuthGuard, DisplayAddPage);
router.get('/surveys/add', DisplayAddPage);

// Display Edit Page
// router.get('/edit/', AuthGuard, EditGuard);
// router.get('/edit/:id', AuthGuard, DisplayEditPage);
router.get('/surveys/edit/:id', DisplayEditPage);

// Process Add Page
//router.post('/add', AuthGuard, ProcessAddPage);
router.post('/surveys/add', ProcessAddPage);

// Process Edit Page
// router.post('/edit/:id', AuthGuard, ProcessEditPage);
router.post('/surveys/edit/:id', ProcessEditPage);

// Process Delete Page
// router.get('/delete/:id', AuthGuard, ProcessDeletePage);
router.get('/surveys/delete/:id', ProcessDeletePage);

export default router;