const express = require('express');
const readerController = require('../controllers/reader');

const router = express.Router();

router.post('/', readerController.create);
router.get('/', readerController.readAll);
router.get('/:id', readerController.readById);
router.patch('/:readerId', readerController.update);
router.delete('/:readerId', readerController.destroy);

module.exports = router;