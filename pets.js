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

    console.table("Pets: ", state.pets);
    //Use render function from below to display pet cards
    render();

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
        let petHtml = state.pets[i].html();
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

