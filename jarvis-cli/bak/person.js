// Object Oriented Programming using Javascript
class Person {
  constructor(personality) {
    this.personality_type = personality.type
  
  }

  sayWhatsUp() {
    
    if (this.personality_type == 'outgoing') {
      console.log('Whats up man!')
  }
    if (this.personality_type == 'introverted') {
      console.log('Hi')
    }
 }
}


 
module.exports = Person
