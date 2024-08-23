let state = {};
state.pets = [];

function petCreator(name, age, species) {
    let pet = {
       name,
       age,
       species,
       energy: Math.floor(Math.random() * 61) + 5,//Random number from 5 to 60
       happiness: Math.floor(Math.random() * 101) + 20,//Random number from 20 to 100
       status() {
            console.log(`Pet Name: ${this.name} Species: ${this.species} Age: ${this.age} Energy: ${this.energy} Happiness: ${this.happiness}`);
       },
       feed() {
            this.energy += 20;
            this.happiness += 20;
            console.log(`You fed ${this.name} their happiness is now ${this.happiness} and energy levels are now ${this.energy}`);
        },
       play() { //Update play function to decrease energy by 15 and happiness increase by 10
            this.energy -= 15;
            this.happiness += 10;
            console.log(`You played with ${this.name} their happiness is now ${this.happiness} and energy levels are now ${this.energy}`);
        },
     //   render() {
     //        // console.log("It's Alive!!!");
     //        document.getElementById('petHeader').innerHTML = "Pet Info:"
     //        document.getElementById('petName').innerHTML = `Pet Name: ${this.name}`;
     //        document.getElementById('petSpecies').innerHTML = `Species: ${this.species}`;
     //        //Had to set the card to be hidden in css because the header and border was showing up
     //        //This makes the Pet Owner Info card visible
     //        document.getElementById('petObject').style.visibility = "visible"
     //   },
       html() {
          return `
               <div class="card border border-4 m-auto" id="petObject" style="width: 18rem;">
                    <h3 class="card-header bg-info" id="petHeader">Pet Info</h3>
                    <div class="card-body">
                         <div class="card-text" id="petName"><strong>Pet Name:</strong> ${this.name}</div>
                         <div class="card-text" id="petSpecies"><strong>Species:</strong> ${this.species}</div>
                         <div class="card-text" id="petAge"><strong>Age:</strong> ${this.age}</div>
                    </div>
               </div>
          `;
       }
    }
    return pet;
    
};

function filterPets() {

    let dogs = state.pets.filter(pet => pet.species === 'dog');
    state.pets.push(dogs);
    console.log('dogs: ', dogs);

    let cats = state.pets.filter(pet => pet.species === 'cat');
    state.pets.push(cats);
    console.log('cats: ', cats);

    let fish = state.pets.filter(pet => pet.species === 'fish');
    state.pets.push(fish);
    console.log('fish: ', fish);

    console.log('Pets: ', state.pets)
}

let pet1 = petCreator('Holly', 2, 'dog');
let pet2 = petCreator('Molly', 3, 'cat');
let pet3 = petCreator('Daisy', 2, 'dog');
let pet4 = petCreator('Gigi', 1, 'fish');
state.pets.push(pet1);
state.pets.push(pet2);
state.pets.push(pet3);
state.pets.push(pet4);
filterPets(state.pets);
// console.log(state.pets)
    
