const authorModels = require('../models/authorModels');
const createAuthor= async function (req, res) {
    let newAuthor = req.body
    let authordetails = await authorModels.create(newAuthor)
    res.send({data: authordetails})
}

  module.exports.createAuthor=createAuthor