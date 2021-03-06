const {
    getAllItems,
    createItem,
    updateItem,
    getItemsById,
    deleteItem,
} = require('./helpers');

const getAuthors = (_, res) => getAllItems(res, 'author');

const createAuthor = (req, res) => createItem(res, 'author', req.body);

const updateAuthor = (req, res) => updateItem(res, 'author', req.body, req.params.id);

const getAuthorById = (req, res) => getItemsById(res, 'author', req.params.id);

const deleteAuthor = (req, res) => deleteItem(res, 'author', req.params.id);

module.exports = {
    getAuthors,
    createAuthor,
    updateAuthor,
    getAuthorById,
    deleteAuthor,
};
