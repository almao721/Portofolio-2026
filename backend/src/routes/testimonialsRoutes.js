const router = require('express').Router();
const db = require('../config/database');

router.get('/', async (req, res) => {
  try {
    const [testimonials] = await db.execute(
      'SELECT * FROM testimonials ORDER BY id DESC'
    );
    res.json({ success: true, data: testimonials });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Gagal mengambil data testimoni.' });
  }
});

router.get('/approved', async (req, res) => {
  try {
    const [testimonials] = await db.execute(
      'SELECT * FROM testimonials WHERE status = "approved" ORDER BY id DESC'
    );
    res.json({ success: true, data: testimonials });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Gagal mengambil data testimoni.' });
  }
});

// KIRIM TESTIMONI BARU 
router.post('/', async (req, res) => {
  try {
    const { name, message } = req.body;

    if (!name || !message) {
      return res.status(400).json({
        success: false,
        message: 'Nama dan pesan wajib diisi.',
      });
    }

    await db.execute(
      'INSERT INTO testimonials (name, message, status) VALUES (?, ?, "pending")',
      [name, message]
    );

    res.status(201).json({
      success: true,
      message: 'Testimoni berhasil dikirim dan menunggu persetujuan.',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Gagal mengirim testimoni.',
    });
  }
});

// UPDATE STATUS TESTIMONI (ADMIN - APPROVE / REJECT)
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // 'approved' atau 'rejected'

    const [existing] = await db.execute(
      'SELECT * FROM testimonials WHERE id = ?',
      [id]
    );

    if (existing.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Testimoni tidak ditemukan.',
      });
    }

    await db.execute(
      'UPDATE testimonials SET status = ? WHERE id = ?',
      [status || 'approved', id]
    );

    res.json({
      success: true,
      message: 'Status testimoni berhasil diperbarui.',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Gagal memperbarui status testimoni.',
    });
  }
});

// HAPUS TESTIMONI (ADMIN)
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await db.execute(
      'DELETE FROM testimonials WHERE id = ?',
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Testimoni tidak ditemukan.',
      });
    }

    res.json({
      success: true,
      message: 'Testimoni berhasil dihapus.',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Gagal menghapus testimoni.',
    });
  }
});

module.exports = router;