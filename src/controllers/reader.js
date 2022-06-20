const { Reader } = require('../models');

exports.create = (req, res) => {
    const newReader = req.body;

    Reader
    .create(newReader)
    .then((newReaderCreated) => res.status(201).json(newReaderCreated))
    .catch((error) => {
        const errorMessages = error.errors.map((e) => e.message);

        return res.status(400).json({ errors: errorMessages });
    });
};

exports.readAll = async (req, res) => {

    try {
        const readers = await Reader.findAll({where: req.query});
        res.status(200).json(readers);  
    } catch (err) {
        res.status(500).json(err);
    }
};


exports.readById = async (req, res) => {
    const { id } = req.params;
    const reader = await Reader.findByPk(id);
    if(!reader) {
        res.status(404).json({ error: "The reader could not be found." });
    } else {
        res.status(200).json(reader);
    }
};
       

exports.update = async (req, res) => {
    const { readerId } = req.params;
    const updateData = req.body;
    const [ updatedRows ] = await Reader.update(updateData, {where:{ id: readerId } });
    if(!updatedRows) {
      res.status(404).json({ error: "The reader could not be found." });
    } else {
      res.status(200).json(updatedRows);
    }
};

exports.destroy = async (req, res) => {
    const { readerId } = req.params;
    const deleteData = await Reader.destroy({ where: { id: readerId } });
    if(deleteData) {
        res.status(204).json(deleteData);
    } else {
        res.status(404).send({ error: "The reader could not be found." });
    }

};

  