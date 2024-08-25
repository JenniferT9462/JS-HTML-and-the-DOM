//Proof of Life:
console.log("state.js is Alive!!!");
//Define a global object called state
const state = {};
//This is where we will store our new pets
state.pets = [];

state.name = localStorage.getItem("name") || "";
state.email = localStorage.getItem("email") || "";
state.phone = localStorage.getItem("phone") || "";
state.city = localStorage.getItem("city") || "";
state.zipCode = localStorage.getItem("zipCode") || "";
state.petName = localStorage.getItem("petName") || "";
state.petType = localStorage.getItem("petType") || "";
//Proof of life:
console.log(state.name);
console.log(state.email);
console.log(state.phone);
console.log(state.city);
console.log(state.zipCode);
console.log(state.petName);
console.log(state.petType);
//Managing the pets array:
function serializePet(pet) {
    return {
        name: pet.name,
        age: pet.age,
        species: pet.species,
        energy: pet.energy,
        happiness: pet.happiness
    };

};
function savePets() {
    const serializePets = state.pets.map(serializePet);
    localStorage.setItem("pets", JSON.stringify(serializePets));
    console.log(serializePets);
};
function loadPets() {
    let petString = localStorage.getItem("pets");
     const savedPets = JSON.parse(petString) || [];
     state.pets = [];
     for(let i=0; i<savedPets.length; i++) {
        state.pets.push(petCreator(savedPets[i].name, savedPets[i].age, savedPets[i].species));
        console.table(state.pets);
     }
}
loadPets();

