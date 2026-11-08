const express = require('express');
const db = require('../config/database');
const router = express.Router();
router.get('/', async (req, res) => {
  try {
    const [messages] = await db.execute('SELECT * FROM messages ORDER BY id DESC');
    res.json({ success: true, data: messages });
  } catch (error) {
    console.error('Error GET messages:', error);
    res.status(500).json({ success: false, message: 'Gagal mengambil pesan.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Nama, email, dan pesan wajib diisi.' });
    }

    const [result] = await db.execute(
      `INSERT INTO messages (name, email, phone, message) VALUES (?, ?, ?, ?)`,
      [name, email, phone || '', message]
    );

    res.status(201).json({ success: true, message: 'Pesan berhasil dikirim.', id: result.insertId });
  } catch (error) {
    console.error('Error POST message:', error);
    res.status(500).json({ success: false, message: 'Gagal mengirim pesan ke server.' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await db.execute('DELETE FROM messages WHERE id = ?', [id]);
    res.json({ success: true, message: 'Pesan berhasil dihapus.' });
  } catch (error) {
    console.error('Error DELETE message:', error);
    res.status(500).json({ success: false, message: 'Gagal menghapus pesan.' });
  }
});

module.exports = router;