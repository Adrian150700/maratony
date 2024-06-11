const { Wyniki } = require('../models');

exports.createWynik = async (req, res) => {
  try {
    const wynik = await Wyniki.create(req.body);
    res.status(201).json(wynik);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getWyniki = async (req, res) => {
  try {
    const wyniki = await Wyniki.findAll();
    res.status(200).json(wyniki);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getWynik = async (req, res) => {
  try {
    const wynik = await Wyniki.findByPk(req.params.id);
    if (wynik) {
      res.status(200).json(wynik);
    } else {
      res.status(404).json({ error: 'Wynik not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateWynik = async (req, res) => {
  try {
    const [updated] = await Wyniki.update(req.body, {
      where: { id_wyniki: req.params.id }
    });
    if (updated) {
      const updatedWynik = await Wyniki.findByPk(req.params.id);
      res.status(200).json(updatedWynik);
    } else {
      res.status(404).json({ error: 'Wynik not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteWynik = async (req, res) => {
  try {
    const deleted = await Wyniki.destroy({
      where: { id_wyniki: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Wynik not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
