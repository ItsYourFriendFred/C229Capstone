/*! 
Routes handling requests related to authentication
*/

import express from 'express';
const router = express.Router();

// Import the Controller Module
import { ProcessLogoutPage, ProcessLoginPage, ProcessRegisterPage } from '../controllers/auth';

/* GET (Display) Login page. */
// router.get('/login', DisplayLoginPage);  // Not needed if a front-end is used

/* Display Register page. */
// router.get('/register', DisplayRegisterPage);  // Not needed if a front-end is used


/* Process Login page. */
router.post('/login', ProcessLoginPage);

/* Process Register page. */
router.post('/register', ProcessRegisterPage);

/* Process Logout page. */
router.get('/logout', ProcessLogoutPage);

export default router;