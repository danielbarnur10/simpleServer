'use strict'
import express from 'express';
import path from 'path';
import cookieSession from 'cookie-session';
import { fileURLToPath } from 'url';
import { getQuotes } from './index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cookieSession({ secret: 'manny is cool' }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    req.session.count = (req.session.count || 0) + 1;
    res.send('viewed ' + req.session.count + ' times\n');
});

app.get('/quotes', async (req, res) => {
    console.log('baba');
    const quotes = await getQuotes();
    res.send(quotes);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Now you're listening on port: ${PORT}`);
});