console.log("pets.js is Alive!!!");
//Proof of life and file links
// petCreator('Fifi', 'Dog', 3).status();
let state = {};
//Starting an empty array that is inside state named pets
//This is where we will store our new pets
state.pets = [];

//If script from pets.js was on top or first, 
//an error for undefined function would occur

//When the save pet button is clicked the savePet function runs
function savePet() {
    // console.log("It's Alive!");
    //Getting the input data from input fields with .value and saving them to a new variable name
    let nameInput = document.getElementById('petsName').value;
    // console.log(nameInput);
    let speciesInput = document.getElementById('species').value;
    // console.log(speciesInput);
    let ageInput = document.getElementById('age').value;
    // console.log(ageInput);
    //Use petCreator function to make a pet using input data
    let pet = petCreator(nameInput, ageInput, speciesInput);
    pet.status();
    //Push each new pet to pets array 
    //that is a property(inside) of the state object
    //Each time you click save button to create a new pet
    state.pets.push(pet);
    //Use render function from below to display pet cards
    render();
    //BONUS: Filter pets into cats, dogs, fish
    filterPets();
    console.table("Pets: ", state.pets);
}
//This is where I want to render pet info cards
//In a div in pets.html w/an id of 'petObject'
let petObject = document.getElementById('petObject');
//Loop thru pets and add each one to the page w/the render function
function render() {
    //Empty string where the html cards will be stored
    let html = '';
    for(let i = 0; i<state.pets.length; i++) {
        //Use the html() method that is from the petCreator 
        //factory function on each pet in pets
        // debugger
        let petHtml = state.pets[i].html(); 
        // console.log(petCreator('Dolly', 2, 'cat').html());
        // console.log(petHtml);
        //Sending the result from each pet that html() method was called on
        //To the html = "" one at a time w/+= operator
        html += petHtml;
    }
    console.log(html);
    //Putting the pet cards into the petObject div w/innerHTML
    petObject.innerHTML = html;
}
let petBtn = document.getElementById('petBtn');
petBtn.addEventListener('click', savePet);

//The filter method iterates over each element in the pets array, 
//applies the provided function, and includes only those elements 
//for which the function returns true.
function filterPets() {
    let dogs = state.pets.filter(pet => pet.species === 'dog');
    // state.pets.push(dogs);
    console.log('dogs: ', dogs);

    let cats = state.pets.filter(pet => pet.species === 'cat');
    // state.pets.push(cats);
    console.log('cats: ', cats);

    let fish = state.pets.filter(pet => pet.species === 'fish');
    // state.pets.push(fish);
    console.log('fish: ', fish);
    // console.log(state.pets)
}

    
