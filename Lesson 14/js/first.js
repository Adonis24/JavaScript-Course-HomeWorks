function myModule() {
  this.hello = function () {
    return console.log('Hello');
  }
  this.goodbye = function () {
    return console.log('goodbye');
  }
}

module.exports = myModule;
