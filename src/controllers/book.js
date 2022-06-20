const { Book } = require('../models');

exports.create = async (req, res) => {
    const newBook = req.body;

    Book
    .create(newBook)
    .then((newBookCreated) => res.status(201).json(newBookCreated))
    .catch((error) => {
        const errorMessages = error.errors.map((e) => e.message);

        return res.status(400).json({ errors: errorMessages });
    });
};

exports.readAll = async (req, res) => {

    try {
        const books = await Book.findAll({where: req.query});
        res.status(200).json(books);  
    } catch (err) {
        res.status(500).json(err);
    }
};


exports.readById = async (req, res) => {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if(!book) {
        res.status(404).json({ error: "The book could not be found." });
    } else {
        res.status(200).json(book);
    }
};
       

exports.update = async (req, res) => {
    const { bookId } = req.params;
    const updateData = req.body;
    const [ updatedRows ] = await Book.update(updateData, {where:{ id: bookId } });
    if(!updatedRows) {
      res.status(404).json({ error: "The book could not be found." });
    } else {
      res.status(200).json(updatedRows);
    }
};

exports.destroy = async (req, res) => {
    const { bookId } = req.params;
    const deleteData = await Book.destroy({ where: { id: bookId } });
    if(deleteData) {
        res.status(204).json(deleteData);
    } else {
        res.status(404).send({ error: "The book could not be found." });
    }

};