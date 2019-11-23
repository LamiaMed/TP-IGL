var bdd = require('./bdd');

var Admin = {
    getInfo: function(callback)
    {
        return bdd.query('SELECT * etudiant', callback);
    }   
}
module.exports = Admin;