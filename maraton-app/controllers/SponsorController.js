const { Sponsor } = require('../models');

exports.createSponsor = async (req, res) => {
  try {
    const sponsor = await Sponsor.create(req.body);
    res.status(201).json(sponsor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getSponsorzy = async (req, res) => {
  try {
    const sponsorzy = await Sponsor.findAll();
    res.status(200).json(sponsorzy);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getSponsor = async (req, res) => {
  try {
    const sponsor = await Sponsor.findByPk(req.params.id);
    if (sponsor) {
      res.status(200).json(sponsor);
    } else {
      res.status(404).json({ error: 'Sponsor not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateSponsor = async (req, res) => {
  try {
    const [updated] = await Sponsor.update(req.body, {
      where: { id_sponsor: req.params.id }
    });
    if (updated) {
      const updatedSponsor = await Sponsor.findByPk(req.params.id);
      res.status(200).json(updatedSponsor);
    } else {
      res.status(404).json({ error: 'Sponsor not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteSponsor = async (req, res) => {
  try {
    const deleted = await Sponsor.destroy({
      where: { id_sponsor: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Sponsor not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
