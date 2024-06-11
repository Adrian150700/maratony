const { Wydarzenie_has_Sponsor } = require('../models');

exports.createWydarzenieHasSponsor = async (req, res) => {
  try {
    const wydarzenieHasSponsor = await Wydarzenie_has_Sponsor.create(req.body);
    res.status(201).json(wydarzenieHasSponsor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getWydarzenieHasSponsorzy = async (req, res) => {
  try {
    const wydarzenieHasSponsorzy = await Wydarzenie_has_Sponsor.findAll();
    res.status(200).json(wydarzenieHasSponsorzy);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getWydarzenieHasSponsor = async (req, res) => {
  try {
    const wydarzenieHasSponsor = await Wydarzenie_has_Sponsor.findOne({
      where: {
        Wydarzenie_id_wydarzenie: req.params.Wydarzenie_id_wydarzenie,
        Sponsor_id_sponsor: req.params.Sponsor_id_sponsor,
      }
    });
    if (wydarzenieHasSponsor) {
      res.status(200).json(wydarzenieHasSponsor);
    } else {
      res.status(404).json({ error: 'Wydarzenie_has_Sponsor not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateWydarzenieHasSponsor = async (req, res) => {
  try {
    const [updated] = await Wydarzenie_has_Sponsor.update(req.body, {
      where: {
        Wydarzenie_id_wydarzenie: req.params.Wydarzenie_id_wydarzenie,
        Sponsor_id_sponsor: req.params.Sponsor_id_sponsor,
      }
    });
    if (updated) {
      const updatedWydarzenieHasSponsor = await Wydarzenie_has_Sponsor.findOne({
        where: {
          Wydarzenie_id_wydarzenie: req.params.Wydarzenie_id_wydarzenie,
          Sponsor_id_sponsor: req.params.Sponsor_id_sponsor,
        }
      });
      res.status(200).json(updatedWydarzenieHasSponsor);
    } else {
      res.status(404).json({ error: 'Wydarzenie_has_Sponsor not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteWydarzenieHasSponsor = async (req, res) => {
  try {
    const deleted = await Wydarzenie_has_Sponsor.destroy({
      where: {
        Wydarzenie_id_wydarzenie: req.params.Wydarzenie_id_wydarzenie,
        Sponsor_id_sponsor: req.params.Sponsor_id_sponsor,
      }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Wydarzenie_has_Sponsor not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
