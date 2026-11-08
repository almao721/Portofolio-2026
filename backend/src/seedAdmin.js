require('dotenv').config();

const bcrypt = require('bcryptjs');
const db = require('./config/database');

async function seedAdmin() {
  try {
    const username = process.env.ADMIN_USERNAME;
    const password = process.env.ADMIN_PASSWORD;

    if (!username || !password) {
      throw new Error('ADMIN_USERNAME atau ADMIN_PASSWORD belum diisi.');
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const [existing] = await db.execute(
      'SELECT id FROM admins WHERE username = ?',
      [username]
    );

    if (existing.length > 0) {
      await db.execute(
        'UPDATE admins SET password = ? WHERE username = ?',
        [hashedPassword, username]
      );

      console.log('Password admin berhasil diperbarui.');
    } else {
      await db.execute(
        'INSERT INTO admins (username, password) VALUES (?, ?)',
        [username, hashedPassword]
      );

      console.log('Akun admin berhasil dibuat.');
    }

  } catch (error) {
    console.error('Gagal membuat admin:', error.message);
  } finally {
    await db.end();
  }
}

seedAdmin();