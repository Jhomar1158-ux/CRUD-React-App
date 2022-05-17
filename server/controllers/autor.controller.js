const Autor = require("../models/autor.model");

module.exports.get_all = (req, res) => {
    /*Autor.find()*/
    // ====================PREGUNTAR COLLATION - FIND
    Autor.find().collation({locale: "en"}).sort({nombre: 1})
        .then(autores => res.json(autores))
        .catch(err => res.status(400).json(err));
}

// Crear Autor
module.exports.create_autor = (req, res) => {
    Autor.create(req.body)
        .then(autor => res.json(autor))
        .catch(err => res.status(400).json(err));
}

// Actualizar Autor
module.exports.update_autor = (req, res) => {
    Autor.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(autor => res.json(autor))
        .catch(err => res.status(400).json(err));
}

// Un autor
module.exports.get_autor = (req, res) => {
    Autor.findOne({_id: req.params.id})
        .then(autor => res.json(autor))
        .catch(err => res.status(400).json(err));
}

// Borrar
module.exports.delete_autor = (req, res) => {
    Autor.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
}