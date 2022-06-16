const { Reader } = require('../models');

exports.create = async (req, res) => {

    try {
    const newReader = await Reader.create(req.body);
    res.status(201).json(newReader);
    } catch (err) {
        res.status(500).json(err);
    }
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
    const { readerId } = req.params;
    const reader = await Reader.findByPk(readerId);

    try {
        res.status(200).json(reader);
    } catch (err) {
        res.status(404).json(err);
    }
};

exports.update = async (req, res) => {
    const { readerId } = req.params;
    const updateData = req.body;
    const [ updatedRows ] = await Reader.update(updateData, {where:{ id: readerId } });
    if(!updatedRows) {
      res.status(404).json({ error: "The reader does not exist" });
    } else {
      const updatedItem = await Reader.findByPk(readerId);
      res.status(200).json(updatedItem);
    }
};

exports.destroy = async (req, res) => {
    const { readerId } = req.params;
    const deleteData = await Reader.destroy({ where: { id: readerId } });
    if(deleteData) {
        res.status(204).send();
    } else {
        res.status(404).send({ error: "The reader could not be found" })
    }

};

  