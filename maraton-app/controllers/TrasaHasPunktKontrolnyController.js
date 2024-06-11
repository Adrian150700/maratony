const { Trasa_has_Punkt_kontrolny } = require('../models');

exports.createTrasaHasPunktKontrolny = async (req, res) => {
  try {
    const trasaHasPunktKontrolny = await Trasa_has_Punkt_kontrolny.create(req.body);
    res.status(201).json(trasaHasPunktKontrolny);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTrasyHasPunktKontrolny = async (req, res) => {
  try {
    const trasyHasPunktKontrolny = await Trasa_has_Punkt_kontrolny.findAll();
    res.status(200).json(trasyHasPunktKontrolny);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTrasaHasPunktKontrolny = async (req, res) => {
  try {
    const trasaHasPunktKontrolny = await Trasa_has_Punkt_kontrolny.findByPk(req.params.Trasa_id_trasa);
    if (trasaHasPunktKontrolny) {
      res.status(200).json(trasaHasPunktKontrolny);
    } else {
      res.status(404).json({ error: 'Trasa_has_Punkt_kontrolny not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateTrasaHasPunktKontrolny = async (req, res) => {
  try {
    const [updated] = await Trasa_has_Punkt_kontrolny.update(req.body, {
      where: { Trasa_id_trasa: req.params.Trasa_id_trasa, Punkt_kontrolny_id_punkt: req.params.Punkt_kontrolny_id_punkt }
    });
    if (updated) {
      const updatedTrasaHasPunktKontrolny = await Trasa_has_Punkt_kontrolny.findByPk(req.params.Trasa_id_trasa);
      res.status(200).json(updatedTrasaHasPunktKontrolny);
    } else {
      res.status(404).json({ error: 'Trasa_has_Punkt_kontrolny not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTrasaHasPunktKontrolny = async (req, res) => {
  try {
    const deleted = await Trasa_has_Punkt_kontrolny.destroy({
      where: { Trasa_id_trasa: req.params.Trasa_id_trasa, Punkt_kontrolny_id_punkt: req.params.Punkt_kontrolny_id_punkt }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Trasa_has_Punkt_kontrolny not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
