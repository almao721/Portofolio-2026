const router = require('express').Router();
const { getTestimonials, createTestimonial, updateStatus, deleteTestimonial } = require('../controller/testimonialController');

router.get('/', getTestimonials);
router.post('/', createTestimonial);
router.put('/:id', updateStatus);
router.delete('/:id', deleteTestimonial);

module.exports = router;