const express = require('express');
const router = express.Router();
const newsController = require('../controllers/news');

router.get('/', newsController.getAllNews);
router.post('/', newsController.createNews);
router.patch('/:id', newsController.updateNews);
router.delete('/:id', newsController.deleteNews);




module.exports = router;
