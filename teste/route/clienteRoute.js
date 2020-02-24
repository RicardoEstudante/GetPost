const ClienteCtrl = require('../cliente/clienteController')

module.exports = app => {
    app.route('/cliente')
        .get(ClienteCtrl.listarCliente)
        .post(ClienteCtrl.cadastrar)
}

