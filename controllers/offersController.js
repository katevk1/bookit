const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Offer
      .find(req.query)
      .sort({ date: -1 })
      .then(dbOffer => res.json(dbOffer))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Offer
      .findById(req.params.id)
      .then(dbOffer => res.json(dbOffer))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Offer
      .create(req.body)
      .then(dbOffer => res.json(dbOffer))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Offer
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbOffer => res.json(dbOffer))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Offer
      .findById({ _id: req.params.id })
      .then(dbOffer => dbOffer.remove())
      .then(dbOffer => res.json(dbOffer))
      .catch(err => res.status(422).json(err));
  }
};