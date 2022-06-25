const express = require('express');
const app = express();
const readerRouter = require('./routes/reader');
const booksRouter = require('./routes/books');
const authorRouter = require('./routes/author');
const genreRouter = require('./routes/genre');

app.use(express.json());
app.use('/readers', readerRouter);
app.use('/books', booksRouter);
app.use('/authors', authorRouter);
app.use('/genres', genreRouter);

app.get('/', (req, res) => {
    res.status(200).json({ result: "Hello World" });
});

module.exports = app;