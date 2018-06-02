//Synchronous and Asynchronous

let sayWhatsUp = function () {
  console.log('hi')
}
let walkAway = function () {
  console.log('...')
}
let sayBye = function(callback) {
  setTimeout(function() {
  console.log('bye')
 callback()
  },2000)
 
}


sayWhatsUp()
sayBye(function() {
  console.log('...')
})


// Callback Functions - Higher Order Functions - Function that is passed to another function as a parameter, and then executed within that function. 
//  Are functions that are called after the execution of a specific process

//Promises - an object representing the eventual completion or failure of an asynchrnous operation. )
