const express = require('express');
const booksController = require('../controllers/book');

const router = express.Router();

router.post('/', booksController.createBook);

router.get('/', booksController.getBooks);

router.get('/:id', booksController.getBookById);

router.patch('/:id', booksController.updateBook);

router.delete('/:id', booksController.deleteBook);


module.exports = router;