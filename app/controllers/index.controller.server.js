// Author : Eman Shalabi
// Student ID : 301248910

// Exporting functions for the router to render

import { UserDisplayName } from '../Utils/utilsindex.js';


export function displayhomePage(req,res,next){
    res.render('index', {title:"Home", page:'home', displayName: UserDisplayName(req)  });
}

export function displayaboutPage(req,res,next){
    res.render('index', {title:"About", page:'about', displayName: UserDisplayName(req)});
}

export function displayprojectsPage(req,res,next){
    res.render('index', {title:"Projects", page:'projects', displayName: UserDisplayName(req)});
}

export function displayservicesPage(req,res,next){
    res.render('index', {title:"Services", page:'services', displayName: UserDisplayName(req)});
}

 export function displaycontactPage(req,res,next){
     res.render('index', {title:"Contact Me", page:'contact-add', contact:{}});
 }

export function displayresumeMe(req,res,next){
    res.render('contactme', {title:"Eman Shalabi Resume", page : "resumeMe", displayName: UserDisplayName(req)})
}

