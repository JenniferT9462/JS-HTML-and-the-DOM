console.log("It's alive!");
//Define a global object called state
const state = {};
//Proof of life 1
console.log(state);
//Proof of life 2 breakpoint at the state object
//??? Using var shows the object inside the global scope...
//using const or let puts it in the script scope ???

function saveForm() {
    //Proof of life
    console.log("Button Clicked!");
    const name = document.getElementById('name').value;
    state.name = name;
    console.table(name); // Proof of life 1: Log name input
    const email = document.getElementById('email').value;
    state.email = email;
    console.table(email); // Proof of life 1: Log email input
    const phone = document.getElementById('phone').value;
    state.phone = phone;
    console.table(phone); // Proof of life 1: Log phone input
    const city = document.getElementById('city').value;
    state.city = city;
    console.table(city); // Proof of life 1: Log city input
    const zipCode = document.getElementById('zipCode').value;
    state.zipCode = zipCode;
    console.table(zipCode); // Proof of life 1: Log zipCode input
    const petName = document.getElementById('petName').value;
    state.petName = petName;
    console.table(petName); // Proof of life 1: Log petName input
    //BONUS: Modify the saveForm() function to include the selected pet type in the state object.
    const petType = document.getElementById('petType').value;
    state.petType = petType;
    console.table(petType); // Proof of life 1: Log petName input


    // state = {
    //     name: name,
    //     email: email,
    //     phone: phone,
    //     city: city,
    //     zipCode: zipCode,
    //     petName: petName
    // };
    //Testing factory functions
    console.table(petOwner(name, email, phone, city, zipCode, petName, petType));
    console.table(petCreator(petName, petType));
    console.table(state);
};
let signUpBtn = document.getElementById('signUpBtn');
signUpBtn.addEventListener('click', saveForm);

//BONUS: Declare a factory function for your pet owner with a 
//status method to print the pet owner's data to the console. 
//(You may make one for the pet, too!)
function petOwner(name, email, phone, city, zipCode, petName) {
    let petOwner =  {
        name,
        email,
        phone,
        city,
        zipCode,
        petName,
        status() {
            console.log(`Pet Owner: ${this.name} Email: ${this.email} Phone: ${this.phone} City: ${this.city} ZipCode: ${this.zipCode} Pet Name: ${this.petName}`);
        }
    }
    return petOwner;
};

function petCreator(name, species) {
    return {
       name,
       species,
       status() {
        console.log(`Pet Name: ${this.name} Species: ${this.species}`);
       } 
    }
};
