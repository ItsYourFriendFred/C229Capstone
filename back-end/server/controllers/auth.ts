/*! 
Callback functions corresponding to routes handling authentication requests
*/

import express from 'express';

// Get Passport functionality
import passport from 'passport';

// Include User model for authentication functions
import User from '../models/user';

// Import JWT Utility Function
import { GenerateToken } from '../util';

// import { UserDisplayName } from '../Util';

// Processing Functions
export function ProcessLoginPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    passport.authenticate('local', function (err, user, info) {
        // Are there server errors?
        if (err) {
            console.error(err);
            res.end(err);
        }

        // Are there login errors?
        if (!user) {
            return res.json({ sucess: false, message: 'Error: Authentication Failed' })
        }

        // No issues - Proper username and password
        req.logIn(user, function (err) {
            // Are there errors? E.g., DB errors
            if (err) {
                console.error(err);
                res.end(err);
            }
            const authToken = GenerateToken(user);

            return res.json({
                success: true, message: 'User logged in successfully!', user: {
                    id: user._id,
                    DisplayName: user.DisplayName,
                    username: user.username,
                    EmailAddress: user.EmailAddress
                }, token: authToken
            });
        });
        return;
    })(req, res, next);
}

export function ProcessRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    // Instantiate a new user object
    let newUser = new User({
        // req.body.attribute correspond to name attributes from HTML form
        username: req.body.username,
        EmailAddress: req.body.emailAddress,
        DisplayName: req.body.firstName + " " + req.body.lastName
    });

    User.register(newUser, req.body.password, function (err) {
        if (err) {
            if (err.name == "UserExistsError") {
                console.error('Error: User Already Exists!');
            }
            else {
                console.error(err.name); // Other error
            }
            return res.json({success: false, message: 'Error: Registration failed!'});
        }
        return res.json({success: true, message: 'User registered successfully!'});
    });
}

export function ProcessLogoutPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    req.logOut(function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        console.log("User has logged out.");
    });

    res.json({success: true, message: 'User logged out successfully!'});
}