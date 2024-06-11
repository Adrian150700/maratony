const { Organizator } = require('../models');

exports.createOrganizator = async (req, res) => {
  try {
    const organizator = await Organizator.create(req.body);
    res.status(201).json(organizator);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getOrganizatorzy = async (req, res) => {
  try {
    const organizatorzy = await Organizator.findAll();
    res.status(200).json(organizatorzy);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getOrganizator = async (req, res) => {
  try {
    const organizator = await Organizator.findByPk(req.params.id);
    if (organizator) {
      res.status(200).json(organizator);
    } else {
      res.status(404).json({ error: 'Organizator not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateOrganizator = async (req, res) => {
  try {
    const [updated] = await Organizator.update(req.body, {
      where: { id_organizator: req.params.id }
    });
    if (updated) {
      const updatedOrganizator = await Organizator.findByPk(req.params.id);
      res.status(200).json(updatedOrganizator);
    } else {
      res.status(404).json({ error: 'Organizator not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteOrganizator = async (req, res) => {
  try {
    const deleted = await Organizator.destroy({
      where: { id_organizator: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Organizator not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
