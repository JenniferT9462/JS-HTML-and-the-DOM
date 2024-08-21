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
            document.getElementById('ownerName').textContent = this.name;
            document.getElementById('ownerEmail').textContent = this.email;
            document.getElementById('ownerPhone').textContent = this.phone;
            document.getElementById('ownerCity').textContent = this.city;
            document.getElementById('ownerZip').textContent = this.zipCode;
        }   
    }
    //BONUS: Hide form after pet owner is created
    document.getElementById('petForm').style.display = "none";
    return petOwner;
};

