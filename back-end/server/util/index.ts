/*! 
Utility functions to be used throughout the application
*/

import express from 'express';

// Enable JWT
import jwt from 'jsonwebtoken';
import * as DBConfig from '../config/db';

// Convenience function to return the DisplayName of the User
export function UserDisplayName(req: express.Request): string {
    if(req.user) {
        let user = req.user as UserDocument;
        return user.DisplayName.toString();
    }
    return '';
}

// Helper middleware function for guarding secure locations
export function AuthGuard(req: express.Request, res: express.Response, next: express.NextFunction): void {
    if(!req.isAuthenticated()) {
        return res.redirect('/login')
    }
    next();
}

export function EditGuard(req: express.Request, res: express.Response, next: express.NextFunction): void {
    if(!req.isAuthenticated()) {
        return res.redirect('/login')
    }
    else {
        return res.redirect('/business-contacts')
    };
}

export function GenerateToken(user: UserDocument): string {
    const payload = {
        id: user._id,
        DisplayName: user.DisplayName,
        username: user.username,
        EmailAddress: user.EmailAddress
    }

    const jwtOptions = {
        expiresIn: 604800  // 1 week
    }

    return jwt.sign(payload, DBConfig.Secret, jwtOptions);
}