const { getNearRestaurants } = require('./models.js');

module.exports = {
  nearRestaurants: function (req, res) {
    getNearRestaurants(req.params.zipcode, (err, result) => {
      if (err) {
        console.log(error);
        res.sendStatus(500);
      } else {
        res.send(result);
      }
    });
  },
};
