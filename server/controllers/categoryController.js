const { Category } = require("../models/category");

module.exports = {
  findAll: function(req, res) {
    Category.find({})
      .populate({ path: "subcategories", select: "name" })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  findOne: function(req, res) {
    let query = req.params.name;
    // let id = JSON.stringify(req.params.id);
    Category.findById(req.params.id)
      .populate({
        path: "subcategories",
        select: "name"
      })
      .then(function(result) {
        res.send(result);
      })
      .catch(err => res.json(err));

    // .then(dbModel => res.json(dbModel))
    // .catch(err => res.json(err));
  }
};
