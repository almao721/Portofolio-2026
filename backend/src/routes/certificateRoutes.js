const express = require('express');
const db = require('../config/database');

const router = express.Router();

// GET SEMUA CERTIFICATE (PUBLIC)
router.get('/', async (req, res) => {
  try {
    const [certificates] = await db.execute('SELECT * FROM certificates ORDER BY id DESC');
    res.json({ success: true, data: certificates });
  } catch (error) {
    console.error('Error GET certificates:', error);
    res.status(500).json({ success: false, message: 'Gagal mengambil sertifikat.' });
  }
});

// TAMBAH CERTIFICATE
router.post('/', async (req, res) => {
  try {
    const { title, image } = req.body;
    if (!title) {
      return res.status(400).json({ success: false, message: 'Judul sertifikat wajib diisi.' });
    }

    const [result] = await db.execute(
      `INSERT INTO certificates (title, image) VALUES (?, ?)`,
      [title, image || '']
    );

    res.status(201).json({ success: true, message: 'Sertifikat berhasil ditambahkan.', id: result.insertId });
  } catch (error) {
    console.error('Error POST certificate:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// HAPUS CERTIFICATE
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await db.execute('DELETE FROM certificates WHERE id = ?', [id]);
    res.json({ success: true, message: 'Sertifikat berhasil dihapus.' });
  } catch (error) {
    console.error('Error DELETE certificate:', error);
    res.status(500).json({ success: false, message: 'Gagal menghapus sertifikat.' });
  }
});

module.exports = router;