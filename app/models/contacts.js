// Author : Eman Shalabi
// Student ID : 301248910

// Import the mongoose module
import mongoose from "mongoose";

// Create schema
const Schema = mongoose.Schema;

// Create new schema for contacts 
const contactSchema = new Schema({
    contactFirstName: String,
    contactLastName:String,
    contactNumber: Number,
    contactEmailAddress: String,
}, {
    timestamps: true,
    collection: "contactList",
});

//Export Schema
export default mongoose.model('contactList', contactSchema);