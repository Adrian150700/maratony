// controllers/AdresController.js
const { Adres } = require('../models');

exports.createAdres = async (req, res) => {
  try {
    const adres = await Adres.create(req.body);
    res.status(201).json(adres);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAdresy = async (req, res) => {
  try {
    const adresy = await Adres.findAll();
    res.status(200).json(adresy);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAdres = async (req, res) => {
  try {
    const adres = await Adres.findByPk(req.params.id);
    if (adres) {
      res.status(200).json(adres);
    } else {
      res.status(404).json({ error: 'Adres not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateAdres = async (req, res) => {
  try {
    const [updated] = await Adres.update(req.body, {
      where: { id_adres: req.params.id }
    });
    if (updated) {
      const updatedAdres = await Adres.findByPk(req.params.id);
      res.status(200).json(updatedAdres);
    } else {
      res.status(404).json({ error: 'Adres not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteAdres = async (req, res) => {
  try {
    const deleted = await Adres.destroy({
      where: { id_adres: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Adres not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
