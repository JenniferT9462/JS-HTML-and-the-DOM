//Define a global object called state
const state = {};
//This is where we will store our new pets
state.pets = [];
//Proof of life:
console.log('Hello from state.js!');
state.name = localStorage.getItem("name") || "";
state.email = localStorage.getItem("email") || "";
state.phone = localStorage.getItem("phone") || "";
state.city = localStorage.getItem("city") || "";
state.zipCode = localStorage.getItem("zipCode") || "";
state.petName = localStorage.getItem("petName") || "";
state.petType = localStorage.getItem("petType") || "";
//Proof of life:
console.log(state);
// function serializePet(pet) {
//     return {
//         name: pet.name,
//         age: pet.age,
//         species: pet.species
//     };

// };
// function savePets() {
//     const serializePets = state.pets.map(serializePet);
//     localStorage.setItem("pets", JSON.stringify(serializePets));
// };
// function loadPets() {
//     let petString = localStorage.getItem("pets");
//      const savedPets = JSON.parse(petString) || [];
//      state.pets = [];
//      for(let i=0; i<savedPets.length; i++) {
//         state.pets.push(petCreator(petData.name, petData.age, ));
//         console.lof(state.pets);
//      }
// }
// loadPets();
