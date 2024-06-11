const { Użytkownik } = require('../models');

exports.createUżytkownik = async (req, res) => {
  try {
    const użytkownik = await Użytkownik.create(req.body);
    res.status(201).json(użytkownik);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUżytkownicy = async (req, res) => {
  try {
    const użytkownicy = await Użytkownik.findAll();
    res.status(200).json(użytkownicy);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUżytkownik = async (req, res) => {
  try {
    const użytkownik = await Użytkownik.findByPk(req.params.id);
    if (użytkownik) {
      res.status(200).json(użytkownik);
    } else {
      res.status(404).json({ error: 'Użytkownik not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateUżytkownik = async (req, res) => {
  try {
    const [updated] = await Użytkownik.update(req.body, {
      where: { id_użytkownik: req.params.id }
    });
    if (updated) {
      const updatedUżytkownik = await Użytkownik.findByPk(req.params.id);
      res.status(200).json(updatedUżytkownik);
    } else {
      res.status(404).json({ error: 'Użytkownik not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteUżytkownik = async (req, res) => {
  try {
    const deleted = await Użytkownik.destroy({
      where: { id_użytkownik: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Użytkownik not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
