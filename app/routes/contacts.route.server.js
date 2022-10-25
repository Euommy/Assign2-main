// Author : Eman Shalabi
// Student ID : 301248910

import { Router } from "express";

// Import functions for controllers
import { DisplayContactList, 
    DisplayContactAddPage, 
    ProcessContactAddPage, 
    ProcessContactUpdatePage, 
    DisplayContactsUpdatePage, 
    ProcessContactDelete } from "../controllers/contacts.controller.server.js";

import { AuthGuard } from "../Utils/utilsindex.js";

const contactRouter = Router();

// Display the contact list page
contactRouter.get('/contact-list', DisplayContactList);

// Post method 
contactRouter.post('/contact-list', DisplayContactList);

// Display contact Add page  
contactRouter.get('/contact-add',  DisplayContactAddPage);

// Process Contact Add Page      
contactRouter.post('/contact-add',AuthGuard, ProcessContactAddPage);

// Process ocntact Update page
contactRouter.post('/contact-update/:id',AuthGuard,  ProcessContactUpdatePage);

// Dsiplay contact update page
contactRouter.get('/contact-update/:id', AuthGuard, DisplayContactsUpdatePage);

// Process contact delete page
contactRouter.get('/contact-delete/:id', AuthGuard,  ProcessContactDelete)

export default contactRouter;