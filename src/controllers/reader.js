const { Reader } = require('../models');

exports.create = async (req, res) => {
    const newReader = await Reader.create(req.body);
    res.status(201).json(newReader);
};

exports.readAll = async (req, res) => {
    const readers = await Reader.findAll({where: req.query});
        res.status(201).json(readers)
    }

// exports.readById = (req, res) => {
//     const {readerId} = req.params;
//     const reader = await Reader.findByPk(readerId);

//     if(!reader) {
//         res.status(404).json({error: "The reader could not be found"});
//     } else {
//         res.status(201).json(reader)
//     }
// }