// Import modules
import express  from "express";
import cookieParser from "cookie-parser";
import logger from 'morgan';
import session from "express-session"

// ES Module fix for __dirname
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';

let localStrategy = passportLocal.Strategy;

import User from './models/user.js';
import mongoose from "mongoose";
import { MongoURI, Secret } from "../config/config.js";

// Importing routers
import indexRouter from './routes/index.route.server.js';
import contactRouter from "./routes/contacts.route.server.js";
import authRouter from "./routes/auth.route.server.js"

const index = express();

mongoose.connect(MongoURI); 
const db = mongoose.connection
db.on('open', () => console.log("connected to MongoDB"));
db.on('error', () => console.log("Mongo connection error"));
index.set('views', path.join(__dirname, '/views') );
index.set('view engine', 'ejs'); 
index.use(logger('dev'));
index.use(express.json());
index.use(express.urlencoded({ extended: false}));
index.use(cookieParser());
index.use(express.static(path.join(__dirname, '../public')));

index.use(session({
    secret: Secret,
    saveUninitialized: false, 
    resave: false
}));

index.use(flash());
index.use(passport.initialize());
index.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
index.use('/', indexRouter);
index.use('/', contactRouter)
index.use('/', authRouter);

export default index;
