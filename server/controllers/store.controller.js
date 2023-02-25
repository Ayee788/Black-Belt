const Store= require('../models/store.model');

module.exports.findAllStores = (req, res) => {
    Store.find()
        .then((allDaStores) => {
            res.json(allDaStores)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.findOneSingleStore= (req, res) => {
    Store.findOne({ _id: req.params.id })
        .then(oneSingleStore=> {
            res.json(oneSingleStore)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.createStore= (req, res) => {
    Store.create(req.body)
        .then(newStore=> {
            res.json(newStore)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.updateExistingStore= (req, res) => {
    Store.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        // runValidators is a recheck for errors before running validators
        { new: true, runValidators: true }
    )
        .then(updatedStore=> {
            res.json(updatedStore)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.deleteAnExistingStore= (req, res) => {
    Store.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}