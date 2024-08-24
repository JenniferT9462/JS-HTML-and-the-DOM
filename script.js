console.log("It's Alive!");
//Define a global object called state



//Proof of life 1
console.log(state);
//Proof of life 2 breakpoint at the state object
//??? Using var shows the object inside the global scope...
//using const or let puts it in the script scope ???

function saveForm() {
    //Proof of life
    console.log("Button Clicked!");
    let name = document.getElementById('name').value;
    state.name = name;
    console.log(name); // Proof of life 1: Log name input
    let email = document.getElementById('email').value;
    state.email = email;
    console.log(email); // Proof of life 1: Log email input
    let phone = document.getElementById('phone').value;
    state.phone = phone;
    console.log(phone); // Proof of life 1: Log phone input
    let city = document.getElementById('city').value;
    state.city = city;
    console.log(city); // Proof of life 1: Log city input
    let zipCode = document.getElementById('zipCode').value;
    state.zipCode = zipCode;
    console.log(zipCode); // Proof of life 1: Log zipCode input
    let pName = document.getElementById('pName').value; //????? Had to rename the id & variable to 'pName'
    // because the functions(or something) was interfering with the 'petName' ???? 
    // I did it the same way as all the other inputs, 
    // but for some reason it didn't work with 'petName' 
    // I am assuming it is because of the factory functions idk. Or because I use the pet name later?
    // Whatever the reason it seems to be working now.
    state.petName = pName;
    console.log(pName); // Proof of life 1: Log petName input
    //BONUS: Modify the saveForm() function to include the selected pet type in the state object.
    let petType = document.getElementById('petType').value;
    state.petType = petType;
    console.log(petType); // Proof of life 1: Log petType input

    //Different way I was going to send everything to state
    // state = {
    //     name: name,
    //     email: email,
    //     phone: phone,
    //     city: city,
    //     zipCode: zipCode,
    //     petName: petName
    // };
    //Testing factory functions and status() using the input data
    console.table(createPetOwner(name, email, phone, city, zipCode));
    let owner = createPetOwner(name, email, phone, city, zipCode);
    owner.status();
    owner.render();
    console.table(petCreator(pName, petType));
    let pet = petCreator(pName, petType);
    pet.status();
    pet.render();
    

    console.table(state);
    //Saving form data to localStorage
    localStorage.setItem("name", state.name);
    localStorage.setItem("email", state.email);
    localStorage.setItem("phone", state.phone);
    localStorage.setItem("city", state.city);
    localStorage.setItem("zipCode", state.zipCode);
    localStorage.setItem("petName", state.petName);
    localStorage.setItem("petType", state.petType);
    
};
let signUpBtn = document.getElementById('signUpBtn');
signUpBtn.addEventListener('click', saveForm);

//BONUS: Declare a factory function for your pet owner with a 
//status method to print the pet owner's data to the console. 
//(You may make one for the pet, too!)

function petCreator(name, species) {
    let pet =  {
       name,
       species,
       status() {
        console.log(`Pet Name: ${this.name} Species: ${this.species}`);
       },
       render() {
        // console.log("It's Alive!!!");
        document.getElementById('petHeader').textContent = "Pet Info:"
        document.getElementById('petName').textContent = `Pet Name: ${this.name}`;
        document.getElementById('petSpecies').textContent = `Species: ${this.species}`;
        //Had to set the card to be hidden in css because the header and border was showing up
        //This makes the Pet Owner Info card visible
        document.getElementById('petObject').style.visibility = "visible"
       } 
    }
    return pet;
};
// petCreator('Fifi', 'Dog').status();

