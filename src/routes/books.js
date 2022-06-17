const express = require('express');
const booksController = require('../controllers/book');

const router = express.Router();

router.post('/', booksController.create);
router.get('/', booksController.readAll);
router.get('/:id', booksController.readById);
router.patch('/:bookId', booksController.update);
router.delete('/:bookId', booksController.destroy);

module.exports = router;