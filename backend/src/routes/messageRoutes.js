const router = require('express').Router();
const { getMessages, createMessage, deleteMessage } = require('../controller/messageController');

router.get('/', getMessages);
router.post('/', createMessage);
router.delete('/:id', deleteMessage);

module.exports = router;