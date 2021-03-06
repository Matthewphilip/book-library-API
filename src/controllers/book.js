const {
    getAllItems,
    createItem,
    updateItem,
    getItemsById,
    deleteItem,
} = require('./helpers');

const getBooks = (_, res) => getAllItems(res, 'book');

const createBook = (req, res) => createItem(res, 'book', req.body);

const updateBook = (req, res) => updateItem(res, 'book', req.body, req.params.id);

const getBookById = (req, res) => getItemsById(res, 'book', req.params.id);

const deleteBook = (req, res) => deleteItem(res, 'book', req.params.id);

module.exports = {
    getBooks,
    createBook,
    updateBook,
    getBookById,
    deleteBook,
};