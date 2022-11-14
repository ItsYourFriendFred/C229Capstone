/*! 
Callback functions corresponding to routes handling survey (database) requests
*/
import express from 'express';
import { CallbackError } from 'mongoose';

import Survey from '../models/survey';

import { UserDisplayName } from '../util';

export function DisplaySurveys(req: express.Request, res: express.Response, next: express.NextFunction): void {
    Survey.find(function (err, surveyCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        //     res.render('index', {title: 'Surveys', page: 'surveys', surveys: surveyCollection, displayName: UserDisplayName(req)});
        // }).sort('title').collation({ locale: 'en', strength: 2 });
        res.json({ success: true, message: 'Survey Displayed Succesfully', surveys: surveyCollection, user: req.user });
    });
}

export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void {
    // res.render('index', { title: 'Add', page: 'edit', survey: '', displayName: UserDisplayName(req)})
    res.json({ success: true, message: 'Add page displayed succesfully' });
}

export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void {
    let id = req.params.id;

    // Pass the id to the DB and read the survey into the edit page
    Survey.findById(id, {}, {}, function (err, surveyToEdit) {
        if (err) {
            console.error(err);
            res.end(err);
        }

        // Show the Edit view with the data
        // res.render('index', { title: 'Edit', page: 'edit', survey: surveyToEdit, displayName: UserDisplayName(req)})
        res.json({ success: true, message: 'Edit page displayed succesfully', survey: surveyToEdit });
    });
}

export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void {
    // Instantiate a new Survey to add
    let newSurvey = new Survey(
        {
            "title": req.body.title,
            "author": req.body.author,
            "dateStart": new Date(req.body.dateStart),
            "dateEnd": new Date(req.body.dateEnd)
            // isActive set below
        }
    );
    newSurvey.isActive = true;
    // Insert the new Survey object into the database (surveys collection)
    Survey.create(newSurvey, function (err: CallbackError) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({success: true, message: 'Successfully created survey!', survey: newSurvey});
    })
}

export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void {
    let id = req.params.id;

    // Instantiate a new survey to edit
    let updatedSurvey = new Survey(
        {
            "_id": id,
            "title": req.body.title,
            "author": req.body.author,
            "dateStart": req.body.dateStart,
            "dateEnd": req.body.dateEnd,
        }
    );

    // Update the survey in the database
    Survey.updateOne({_id: id}, updatedSurvey, function(err: CallbackError) {
        if (err) {
            console.error(err);
            res.end(err);
        }

        res.json({success: true, message: 'Successfully edited survey!', survey: updatedSurvey});
    });
}

export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction): void {
    let id = req.params.id;

    // Pass the ID to the database and delete the survey
    Survey.remove({_id: id}, function(err: CallbackError){
        if (err) {
            console.error(err);
            res.end(err);
        }

        // Delete was successful
        res.json({success: true, message: 'Successfully deleted survey!'});
    });
}