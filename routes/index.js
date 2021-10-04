const corporation = require('../packages/corporation/index')

module.exports = (app) => {
             app.post('/corporation/add', corporation.addCorporation )
    }