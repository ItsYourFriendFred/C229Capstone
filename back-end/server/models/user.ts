/*! 
Defining a schema for a user for MongoDB
*/

// Import Mongoose
import mongoose, { PassportLocalSchema } from "mongoose";
const Schema = mongoose.Schema; // Alias for mongoose.Schema
import passportLocalMongoose from 'passport-local-mongoose';

// Create a Schema that matches the data
const UserSchema = new Schema(
    {
        username: String,
        DisplayName: String,
        EmailAddress: String,
        Created:
        {
            type: Date,
            default: Date.now()
        },
        Updated:
        {
            type: Date,
            default: Date.now()
        }
    },
    {
        collection: "users"
    }
);

declare global {
    export type UserDocument = mongoose.Document &
    {
        username: String,
        DisplayName: String,
        EmailAddress: String
    }
}

// Plug in the Passport Local Mongoose module
UserSchema.plugin(passportLocalMongoose);

// Create a Model using the Schema
const Model = mongoose.model("User", UserSchema as PassportLocalSchema);

// Export the Model (to create a module from this file)
export default Model;