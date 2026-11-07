const router = require('express').Router();
const { getCertificates, createCertificate, deleteCertificate } = require('../controller/certificateController');

router.get('/', getCertificates);
router.post('/', createCertificate);
router.delete('/:id', deleteCertificate);

module.exports = router;