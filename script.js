//Write a function
var startMyDay = function () {
  return "Time for coffee and a shower!";
};

console.log(startMyDay());

//Write a function with 1 Parameter
var favoriteCookie = function (cookie) {
  return `My favorite cookie is ${cookie}.`;
};

console.log(favoriteCookie("chocolate chip"));

//Write a Function with 2 Parameters
var introduce = function (name, occupation) {
  return `Hi, my name is ${name} and I am a ${occupation}.`;
};

console.log(introduce("Cassandra", "Artist"));
console.log(introduce("Mommy", "Superhero"));

//Create a function to Capture Input
var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("How many glasses of water did you drink today?")
  );
  if (numGlasses >= 8) {
    console.log("You're hydrated!");
  } else if (numGlasses < 8) {
    console.log("You need more water!");
  }
};
