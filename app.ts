import express from 'express';
import session from 'express-session';
import nocache from 'nocache';
import path from 'path';

const app: express = express()
app.use(express.json());
app.use(express.urlencoded({extended: true}));

