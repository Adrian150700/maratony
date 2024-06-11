const { Płatność } = require('../models');

exports.createPlatnosc = async (req, res) => {
  try {
    const platnosc = await Płatność.create(req.body);
    res.status(201).json(platnosc);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPlatnosci = async (req, res) => {
  try {
    const platnosci = await Płatność.findAll();
    res.status(200).json(platnosci);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPlatnosc = async (req, res) => {
  try {
    const platnosc = await Płatność.findByPk(req.params.id);
    if (platnosc) {
      res.status(200).json(platnosc);
    } else {
      res.status(404).json({ error: 'Płatność not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePlatnosc = async (req, res) => {
  try {
    const [updated] = await Płatność.update(req.body, {
      where: { id_płatność: req.params.id }
    });
    if (updated) {
      const updatedPlatnosc = await Płatność.findByPk(req.params.id);
      res.status(200).json(updatedPlatnosc);
    } else {
      res.status(404).json({ error: 'Płatność not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePlatnosc = async (req, res) => {
  try {
    const deleted = await Płatność.destroy({
      where: { id_płatność: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Płatność not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
