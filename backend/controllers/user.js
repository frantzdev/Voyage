const bcrypt = require('bcrypt');
const models = require('../models');

exports.signup = async (req, res, next) => {
  const hash = await bcrypt.hash(req.body.password, 10)
  // const hashEmail = await bcrypt.hash(req.body.email, 10)
  const user = await models.User.create({
    email: /*hashEmail*/req.body.email,  
    password: hash,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    birthdate: req.body.birthdate,
    country: req.body.country,
    isAdmin: false
  })
  user.save()
  .then( () => res.status(201).json({ message: "inscription réussi" }))
  .catch(error => res.status(400).json({ error: error }));
};

exports.login = (req, res, next) => {
    res.status(200).json();
};  