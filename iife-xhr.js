// In the iife-xhr.js file, define two functions that will be executed after each type of animal is loaded then display those animals in your DOM. (Example given below)


let outputDiv = document.getElementById("output");

//getter functions?
function showCarnivores (carnivores) {
	carnivores.forEach(function(animal){
	outputDiv.innerHTML+= `<h2>${animal}</h2>`;
})
}

function showHerbivores (herbivores) {
	herbivores.forEach(function(animal){
	outputDiv.innerHTML +=`<h2>${animal}</h2>`
});
}

Predator.loadCarnivores(showCarnivores);

Predator.loadHerbivores(showHerbivores);

