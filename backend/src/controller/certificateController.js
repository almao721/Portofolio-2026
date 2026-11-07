let certificates = [
  { id: 1, title: 'Sertifikat Web Dev', image: '/Asset/cert1.png' },
  { id: 2, title: 'Sertifikat Frontend', image: '/Asset/cert2.png' }
];

exports.getCertificates = (req, res) => res.json(certificates);

exports.createCertificate = (req, res) => {
  const newCert = { id: Date.now(), ...req.body };
  certificates.push(newCert);
  res.json({ message: 'Sertifikat berhasil ditambah', data: newCert });
};

exports.deleteCertificate = (req, res) => {
  certificates = certificates.filter(c => c.id != req.params.id);
  res.json({ message: 'Sertifikat berhasil dihapus' });
};