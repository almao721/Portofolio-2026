let testimonials = [
  { id: 1, name: 'Budi Santoso', message: 'Website portofolionya keren!', status: 'approved' }
];

exports.getTestimonials = (req, res) => res.json(testimonials);

exports.createTestimonial = (req, res) => {
  const newTesti = { id: Date.now(), ...req.body, status: 'pending' };
  testimonials.push(newTesti);
  res.json({ message: 'Testimoni dikirim, menunggu moderasi', data: newTesti });
};

exports.updateStatus = (req, res) => {
  const { status } = req.body;
  testimonials = testimonials.map(t => t.id == req.params.id ? { ...t, status } : t);
  res.json({ message: 'Status testimoni diperbarui' });
};

exports.deleteTestimonial = (req, res) => {
  testimonials = testimonials.filter(t => t.id != req.params.id);
  res.json({ message: 'Testimoni dihapus' });
};