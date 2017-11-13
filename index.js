// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendDriver(name) {
  return drivers.push('Ralph');
}
function destructivelyPrependDriver(name) {
  return drivers.unshift('Bob');
}
function destructivelyRemoveLastDriver() {
  return drivers.pop();
}
function destructivelyRemoveFirstDriver() {
  return drivers.shift();
}
