class AvengerProfile {
    constructor(hero) {
      this.name = hero.name
      this.description = hero.description
    }

  createProfile (){
    return {
      name: this.name,
      description: this.description
    }
  }
}
module.exports = AvengerProfile

