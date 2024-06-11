const { Wydarzenie_has_Organizator } = require('../models');

exports.createWydarzenieHasOrganizator = async (req, res) => {
  try {
    const wydarzenieHasOrganizator = await Wydarzenie_has_Organizator.create(req.body);
    res.status(201).json(wydarzenieHasOrganizator);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getWydarzenieHasOrganizatorzy = async (req, res) => {
  try {
    const wydarzenieHasOrganizatorzy = await Wydarzenie_has_Organizator.findAll();
    res.status(200).json(wydarzenieHasOrganizatorzy);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getWydarzenieHasOrganizator = async (req, res) => {
  try {
    const wydarzenieHasOrganizator = await Wydarzenie_has_Organizator.findOne({
      where: {
        Wydarzenie_id_wydarzenie: req.params.Wydarzenie_id_wydarzenie,
        Organizator_id_organizator: req.params.Organizator_id_organizator,
      }
    });
    if (wydarzenieHasOrganizator) {
      res.status(200).json(wydarzenieHasOrganizator);
    } else {
      res.status(404).json({ error: 'Wydarzenie_has_Organizator not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateWydarzenieHasOrganizator = async (req, res) => {
  try {
    const [updated] = await Wydarzenie_has_Organizator.update(req.body, {
      where: {
        Wydarzenie_id_wydarzenie: req.params.Wydarzenie_id_wydarzenie,
        Organizator_id_organizator: req.params.Organizator_id_organizator,
      }
    });
    if (updated) {
      const updatedWydarzenieHasOrganizator = await Wydarzenie_has_Organizator.findOne({
        where: {
          Wydarzenie_id_wydarzenie: req.params.Wydarzenie_id_wydarzenie,
          Organizator_id_organizator: req.params.Organizator_id_organizator,
        }
      });
      res.status(200).json(updatedWydarzenieHasOrganizator);
    } else {
      res.status(404).json({ error: 'Wydarzenie_has_Organizator not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteWydarzenieHasOrganizator = async (req, res) => {
  try {
    const deleted = await Wydarzenie_has_Organizator.destroy({
      where: {
        Wydarzenie_id_wydarzenie: req.params.Wydarzenie_id_wydarzenie,
        Organizator_id_organizator: req.params.Organizator_id_organizator,
      }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Wydarzenie_has_Organizator not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
