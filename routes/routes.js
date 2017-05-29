const DriverController = require('../controllers/drivers_controller');
module.exports = (app) => {
    // Whenever there is a incoming GET Method to route '/api', 
    // run the callback function
    app.get('/api', DriverController.greeting);

    // we do not put () after the create because we do not want it to be run at the app booting up
    app.post('/api/drivers',DriverController.create);
    app.put('/api/drivers/:id', DriverController.edit);
}