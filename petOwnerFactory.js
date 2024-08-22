console.log("It's Alive!!!");

function createPetOwner(name, email, phone, city, zipCode) {
    let petOwner =  {
        name,
        email,
        phone,
        city,
        zipCode,
        status() {
            console.log(`Pet Owner: ${this.name} Email: ${this.email} Phone: ${this.phone} City: ${this.city} ZipCode: ${this.zipCode}`);
        },
        render() {
            // console.log('Hey I Work!');
            document.getElementById('petOwnerHeader').textContent = `Pet Owner Info:`
            document.getElementById('ownerName').textContent = `Owner Name: ${this.name}`;
            document.getElementById('ownerEmail').textContent = `Email: ${this.email}`;
            document.getElementById('ownerPhone').textContent = `Phone: ${this.phone}`;
            document.getElementById('ownerCity').textContent = `City: ${this.city}`;
            document.getElementById('ownerZip').textContent = `Zip Code: ${this.zipCode}`;
            document.getElementById('ownerObject').style.visibility = "visible"
        }   
    }
    //BONUS: Hide form after pet owner is created
    document.getElementById('petForm').style.display = "none";
    
    return petOwner;
};


