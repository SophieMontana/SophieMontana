var api = require('marvel-api')



class Marvel {
  constructor(config) {
    this.marvel = api.createClient({
      publicKey : config.publicKey,
      privateKey : config.privateKey
    });


  }


  getFirst100() {
  this.marvel.characters.findAll(100)
    .then(function(res) {
      for (var index = 0; index < res.data.length; index++) {
        console.log ((index + 1) + ' ' + res.data [index].name)
      }
    })
    .fail(console.error)
    .done();
  }
}

module.exports = Marvel
