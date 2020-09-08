// Roads and coords objects are expected to be loaded
const ctx = document.querySelector("#town").getContext("2d");

function Person(name) {
    this.name = name;
    this.greeting = function() {
      alert('Hi! I\'m ' + this.name + '.');
    };
  }

build_connections();
initPackages();
//let mainRobot = robot();
//mainRobot.init("A");
let person1 = Person("Per");
console.log(person1.name);

reDraw();


