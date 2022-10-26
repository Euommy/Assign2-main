// Import modules
import express  from "express";
import cookieParser from "cookie-parser";
import logger from 'morgan';
import session from "express-session"

// ES Module fix for __dirname
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// Auth Step 1 - import modules
import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';

// Auth Step 2 - define our auth strategy
let localStrategy = passportLocal.Strategy;

// Auth Step 3 - import the user model
import User from './models/user.js';

// Import Mongoose Module
import mongoose from "mongoose";
// Configuration Module
import { MongoURI, Secret } from "../config/config.js";

// Import routers
import indexRouter from './routes/index.route.server.js';
import contactRouter from "./routes/contacts.route.server.js";
import authRouter from "./routes/auth.route.server.js"

// Instantiate Express Application
const index = express();

// Complete the DB Configuration
mongoose.connect(MongoURI); 
const db = mongoose.connection

//Listen for connection success or error
db.on('open', () => console.log("connected to MongoDB"));
db.on('error', () => console.log("Mongo connection error"));

// Set Up Middlewares

// Setup ViewEngine EJS
index.set('views', path.join(__dirname, '/views') );
index.set('view engine', 'ejs'); 

index.use(logger('dev'));
index.use(express.json());
index.use(express.urlencoded({ extended: false}));
index.use(cookieParser());
index.use(express.static(path.join(__dirname, '../public')));
// Auth Step 4 - Setup Express Session
index.use(session({
    secret: Secret,
    saveUninitialized: false, 
    resave: false
}));
// Auth Step5 - Setup Flash
index.use(flash());

// Auth Step 6 - Initialize Passport and Session
index.use(passport.initialize());
index.use(passport.session());

// Auth Step 7 - Implement the Auth Strategy
passport.use(User.createStrategy());

// Auth Step 8 - Setup serialization and deserialization
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Use Routes
index.use('/', indexRouter);
index.use('/', contactRouter)
index.use('/', authRouter);

export default index;
