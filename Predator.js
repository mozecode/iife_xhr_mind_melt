// Create an IIFE with the name of Predator.
 var Predator = (function (Predator){
  // Predator should have two private arrays to store carnivores and herbivores.
  let carnivores = [];
  let herbivores = [];

// Predator should expose two public functions to load each JSON file and store the array of animals in the appropriate private array. Each of those functions should accept one argument that will store the callback function to be executed.
Predator.loadCarnivores= function (showC) {
    var loader = new XMLHttpRequest();
    loader.open("GET", "data/carnivores.json");
    loader.send();

    loader.addEventListener("load", function () {
        // Set the value of the private array
    carnivores = JSON.parse(event.target.responseText);

    showC(carnivores);
        // Invoke the callback function so that the caller knows that the process is complete. Make sure to pass the carnivore array as an argument.
      });
    }

Predator.loadHerbivores= function (showH) {
    var loadH = new XMLHttpRequest();
    loadH.open("GET", "data/herbivores.json");
    loadH.send();
    loadH.addEventListener("load", function () {
        // Set the value of the private array
    herbivores = JSON.parse(event.target.responseText);
    showH(herbivores);
        // Invoke the callback function so that the caller knows that the process is complete. Make sure to pass the herbivore array as an argument.
        });
    }

return Predator;
})(Predator || {});


// In the Predator IIFE, invoke the callback function, passed in from iife-xhr.js, after each file is loaded.