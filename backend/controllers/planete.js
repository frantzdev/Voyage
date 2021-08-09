const models = require('../models');

/*post*/
exports.postPlanete = async (req, res, next) =>{
    const newItem = req.file ?
    {
    title :req.body.title,  
    titlePhoto :req.body.titlePhoto,  
    descriptifPhoto :req.body.descriptifPhoto,  
    content: req.body.content,
    range: req.body.range,
    price: req.body.price,
    image: process.env.URL + `/images/${req.file.filename}`
    } : { ...req.body }
  const planetes = await models.Planete.create(newItem)
  planetes.save()
  .then( () => res.status(201).json({ message: "envoi réussi" }))
  .catch(error => res.status(400).json({ error: error }));
};

/*getOne*/
exports.getPlanete = async (req, res, next) => {
    let onePlanete = null;
    try{
    onePlanete = await models.Planete.findOne({
        where: { id: req.params.id }
    })
    }
    catch ( error ) {
        return res.status(400).json({error : "error request"})
    }
    return res.status(200).json(onePlanete)
};

/*getALL*/
exports.getAllPlanete = async (req, res, next) => {
    let allPlanete = [];
    try {
        planetes = await models.Planete.findAll();
    } catch (error) {
        return res.status(400).json({error : "error request"})
    }
    for ( let i = 0; i < planetes.length; i++) {
        allPlanete.push({
            title: planetes[i].title,
            image: planetes[i].image,
            titlePhoto: planetes[i].titlePhoto,
            descriptifPhoto: planetes[i].descriptifPhoto,
            content: planetes[i].content,
            range: planetes[i].range,
            price: planetes[i].price,
            id: planetes[i].id
        })
    }
    return res.status(200).json(allPlanete);
};


