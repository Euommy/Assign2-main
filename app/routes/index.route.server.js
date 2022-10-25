// Author : Eman Shalabi
// Student ID : 301248910

// Import Router Object
import {Router} from "express";

//Add contact from controller
import { DisplayContactAddPage, ProcessContactAddPage } from "../controllers/contacts.controller.server.js";
import { AuthGuard } from "../Utils/utilsindex.js";

// Import functions from controller
import { displayaboutPage, displayhomePage, displayservicesPage, displayprojectsPage, displayresumeMe, displaycontactPage } from "../controllers/index.controller.server.js";

// Instantiate router
const indexRouter = Router();

// Set functions to run from the controllers
indexRouter.get('/', displayhomePage);
indexRouter.get('/home', displayhomePage);
indexRouter.get('/services',  displayservicesPage);
indexRouter.get('/about',  displayaboutPage);
indexRouter.get('/contact', DisplayContactAddPage);
indexRouter.post('/contact-add', ProcessContactAddPage); 
indexRouter.get('/projects', displayprojectsPage);
indexRouter.get('/resumeMe', displayresumeMe);

// Export router
export default indexRouter;
