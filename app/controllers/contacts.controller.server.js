// Author : Eman Shalabi
// Student ID : 301248910

// Importing contactModel
import contactModel from "../models/contacts.js";

// Importing UserDisplayName for authenticating
import { UserDisplayName } from '../Utils/utilsindex.js';

// Display Contact List function
export function DisplayContactList(req,res,next){                                                  
    contactModel.find(function(err, contactCollection){                                           
        if (err){                                                                                 
                                                                                                
            console.error(err);
            res.end(err)
        }
        res.render('index', {title:'Contacts', page:'contacts/contactCollection', contact:contactCollection, displayName: UserDisplayName(req)  } );  
        })
    }

// Display contact add page function
export function DisplayContactAddPage (req,res, next){
    res.render('index', {title: 'Add Contact', page : '/contact', contact:{} , displayName: UserDisplayName(req) }); 
}

// Process contact add Page fucntion
export function ProcessContactAddPage(req, res, next){
    
    // Population of schema before creation of the collection for db
    let newContact = contactModel({
        contactFirstName: req.body.fName,
        contactLastName: req.body.lName,
        contactNumber: req.body.contactNumber,
        contactEmailAddress: req.body.contactEmail,
    });

    // Creation of new collection from defined schema above
    contactModel.create(newContact, (err, contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contact-list')
    } )
}

// Display contact page function
export function DisplayContactsUpdatePage(req, res, next){
    // Request parameters to provide contact id
    let id = req.params.id;

    // Seach contact model by id (render uses contact object created)
    contactModel.findById(id, (err, contact) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Update Contact', page: '/contact', contact: contact, displayName: UserDisplayName(req)});  
    });    
}

export function ProcessContactUpdatePage(req, res, next){
    // Define id as request's id firstly
    let id = req.params.id;   

    // Update the contact after defining the id above
    let newContact = contactModel({
        _id: req.body.id,
        contactFirstName: req.body.fName,
        contactLastName: req.body.lName,
        contactNumber: req.body.contactNumber,
        contactEmailAddress: req.body.contactEmail,
    });

    // Update the id 
    contactModel.updateOne({_id: id }, newContact, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contact-list')
    } )
}

// Delete function
    export function ProcessContactDelete(req, res, next){
    // instantiating id to help identify record with id and remove it below
    let id = req.params.id;

    // Access contact model created above by id 
    contactModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/contact-list');
    })
}