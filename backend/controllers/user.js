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

exports.login = async (req, res, next) => {
    const userDB = await models.User.findOne({ where: { email: req.body.email } });
      if(!userDB) {
        return res.status(401).json({ message: "Cette adresse email n'existe pas" })
      } else {
          const bcryptCompare = await bcrypt.compare(req.body.password, userDB.password );
          if(!bcryptCompare) {
            return res.status(404).json({ message: "Mot de passe incorrect" });
          } else {
              return res.status(200).json({
              message: 'Utilisateur trouvé !',
              userId: userDB.id,
              fisrtname: userDB.firstname,
              lastname: userDB.lastname,
              birthdate: userDB.birthdate,
              country: userDB.country
              });
            }
        }   
};  