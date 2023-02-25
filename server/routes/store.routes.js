const StoreController = require('../controllers/store.controller');

module.exports = app => {
    app.get('/api/store', StoreController.findAllStores);
    app.post('/api/store', StoreController.createStore);
    app.get('/api/store/:id', StoreController.findOneSingleStore);
    app.put('/api/store/:id', StoreController.updateExistingStore);
    app.delete('/api/store/:id', StoreController.deleteAnExistingStore);
}