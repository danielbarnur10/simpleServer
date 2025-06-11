'use strict'
import { getQuotes } from './index.js';
import pkg from 'express';
import pkgP from 'path';
import cookieSession from 'cookie-session'
const path = pkgP;

const express = pkg;
const app = express();

// var express = require('../../');
const axios = require('axios');
app.use(cookieSession({ secret: 'manny is cool' }));

app.get('/', function (req, res) {
    req.session.count = (req.session.count || 0) + 1
    res.send('viewed ' + req.session.count + ' times\n')
})


app.use(express.static("public"));

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
})
app.get('/quotes', async (req, res) => {
    console.log("baba")
    res = await getQuotes();
    res.send(res)

})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Now you're listening on port: ${PORT}`);
})