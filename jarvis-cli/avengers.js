var api = require('marvel-api')
var profile = require('./avengerprofile')


class Avengers {
  constructor(config) {
    this.marvel = api.createclient({
      publickey : config.publickey,
      privatekey : config.privatekey
    });

  }

  getSpiderMan(){
   this.marvel.characters.findByName('spider-man')
      .then(function(res) {
        console.log(res)
      })
      .fail(console.error)
      .done();
  }

  assemble(cb) {
    promise.all([this.marvel.characters.findyByName('Thor')]).then(function (responses) {
      let heroProfiles = []
      responses.forEach(function(character) {
        let profile = new Profile({name:character.data[0].name,description: character.data[0].description})
     
        heroProfiles.push(profile.createProfile())
      })
       console.log('Avengers Assemble!!!')
      cb(json.stringify(heroProfiles))
      })
    }
}

module.exports = Avengers
    
    
