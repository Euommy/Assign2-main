// Author : Eman Shalabi
// Student ID : 301248910

// Import mongoose module
import mongoose from "mongoose";

// Import passprot local mogoose module
import passportLocalMongoose from 'passport-local-mongoose';
const { PassportLocalSchema } = mongoose;

// Instantiate Schema object
const Schema = mongoose.Schema;

// Create a new user Schema
const UserSchema = new Schema({
    displayName:String,
    username: String,
    emailAddress: String
},{
    timestamps:true,
    collection: 'users'
});

// Use the passport Local mongoose
UserSchema.plugin(passportLocalMongoose);

// Export user schema
export default mongoose.model('User', UserSchema);