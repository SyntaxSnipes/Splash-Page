
let firstName = document.getElementById("fn")
let firstNameVar = ""
let fnWarning = document.getElementById("fnWarning")
let lastName = document.getElementById("ln")
let lastNameVar = ""
let suffix = document.getElementById("s-opt")
let address = document.getElementById("address")
let addressVar = ""
let addressWarning = document.getElementById("addressWarning")
let area = document.getElementById("area")
let town = document.getElementById("town")
let city = document.getElementById("city")
let cityVar = ""
let country = document.getElementById("country")
let countryVar = ""
let creditNum = document.getElementById("cnum")
let creditNumVar = 0

let cardPayment = document.getElementById("paymentsection")

let email = document.getElementById("emailid")
let emailVar = ""
let emailWarning = document.getElementById("emailWarning")
let phone = document.getElementById("phone")
let phoneVar = ""
let phoneWarning = document.getElementById("phoneWarning")
let expirationVal = ""
let thecvvVal = ""


let masterCard = document.getElementById("mc")
let visa = document.getElementById("visa")
let amex = document.getElementById("amex")

let CCValid = false;
let EXValid = false;
let CVVValid = false

function check(){

    let fnValid = false
    let lnValid = false
    let addressValid = false
    let phoneValid = false
    let emailValid = false
    let fnLength = firstName.value.length;
    let lnLength = lastName.value.length;
    let addressLength = address.value.length
    let phoneLength = phone.value.length

    console.log(fnLength)
    console.log(lnLength)
    console.log(addressLength)

    if (fnLength === 0){
        fnWarning.textContent = ""
        fnWarning.textContent += "Please enter your first name."
        firstName.style.background = "rgba(227, 141, 141, 0.4)"
        firstName.style.border = "2px solid red"
        fnValid = false

    }
    else{
        fnWarning.textContent = ""; // Clear the warning message
        firstName.style.background = "none"; // Reset background
        firstName.style.border = "2px solid grey"; // Reset border
        fnValid = true
        firstNameVar += firstName.value
    }
    if (lnLength === 0){
        lnWarning.textContent = ""
        lnWarning.textContent += "Please enter your last name."
        lastName.style.background = "rgba(227, 141, 141, 0.4)"
        lastName.style.border = "2px solid red"
        lnValid = false

    }

    else {
        lnWarning.textContent = ""; // Clear the warning message
        lastName.style.background = "none"; // Reset background
        lastName.style.border = "2px solid grey"; // Reset border
        lnValid = true;
        lastNameVar += lastName.value
    }

    if (addressLength < 35){
        addressWarning.textContent = ""
        addressWarning.textContent += "Please enter an address with at-least 35 characters"
        address.style.background = "rgba(227, 141, 141, 0.4)"
        address.style.border = "2px solid red"
        addressValid = false;
    }

    else {
        addressWarning.textContent = ""
        address.style.background = "none";
        address.style.border = "2px solid grey"
        addressValid = true;
        addressVar += address.value
    }


    if (email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1) {
        emailWarning.textContent = "Please enter a valid email address.";
        email.style.background = "rgba(227, 141, 141, 0.4)";
        email.style.border = "2px solid red";
        emailValid = false
    } 
    else {
        emailWarning.textContent = "";
        email.style.background = "none";
        email.style.border = "2px solid grey";
        emailValid = true
        emailVar += email.value
    }


    if (phoneLength < 10){
        phoneWarning.textContent = ""
        phoneWarning.textContent = "Please enter a valid phone number. "
        phone.style.background = "rgba(227, 141, 141, 0.4)"
        phone.style.border = "2px solid red"
        phoneValid = false
    } 
    else {
        phoneWarning.textContent = "";
        phone.style.background = "none";
        phone.style.border = "2px solid grey"
        phoneValid = true
        phoneVar += phone.value

    }
    console.log("fnValid:", fnValid);
    console.log("lnValid:", lnValid);
    console.log("addressValid:", addressValid);
    console.log("emailValid:", emailValid);
    console.log("phoneValid:", phoneValid);

    if (fnValid && lnValid && addressValid && emailValid && phoneValid) {
        cardPayment.style.display = "flex"; // Change the display property
        document.getElementById("info").style.display = "none"
    } else {
        cardPayment.style.display = "none"; // Reset the display property
        document.getElementById("info").style.display = "flex"
    }


}



function CCID() {
    let cnumValue = creditNum.value;
    let cnumfv = cnumValue.charAt(0);

    visa.style.opacity = "10%";
    amex.style.opacity = "10%";
    masterCard.style.opacity = "10%";

    if (cnumfv == 3) {
        amex.style.opacity = "100%";
    } else if (cnumfv == 4) {
        visa.style.opacity = "100%";
    } else if (cnumfv == 5) {
        masterCard.style.opacity = "100%";
    }
}
function experID(){
    let expirValue= document.getElementById("expiration").value;
    let expirlength = expirValue.length

    if (expirlength !== 5){
        console.log(expirlength)
        expiration.style.background = "rgba(227, 141, 141, 0.4)";
        expiration.style.border = "2px solid red";
        EXValid = false
    }
    else {
        expiration.style.background = "none";
        expiration.style.border = "2px solid grey"
        EXValid = true
        expirationVal += expiration.value
    }
}

function cvvID(){
    let cvvValue= document.getElementById("cvv").value;
    let cvvLength = cvvValue.length

    if (cvvLength !== 3){
        cvv.style.background = "rgba(227, 141, 141, 0.4)";
        cvv.style.border = "2px solid red";
        CVVValid = false
    }
    else {
        cvv.style.background = "none";
        cvv.style.border = "2px solid grey"
        CVVValid = true
        thecvvVal += cvv.value
    }
}

function isCC(){
    if (city.value && country.value) {
        cityVar += city.value; // Assign the value to cityVar
        countryVar += country.value; // Assign the value to countryVar
        console.log("country city engaged")
    }
}
function CCDC() {
    let cnumValue = creditNum.value;
    let cnumLength = cnumValue.length;
    let cnumfv = cnumValue.charAt(0);

    if (cnumLength == 16 && cnumfv !== '3' ) {
        creditNum.style.background = "none";
        creditNum.style.border = "2px solid grey"; // Reset to grey
        CCValid = true;
        creditNumVar += creditNum.value;

    }


    else if (cnumLength == 15 && cnumfv == '3') {
        creditNum.style.background = "none";
        creditNum.style.border = "2px solid grey";
        CCValid = true
        CCValid = true
        creditNumVar += creditNum.value
    }
    else {
        creditNum.style.background = "rgba(227, 141, 141, 0.4)";
        creditNum.style.border = "2px solid red";
        CCValid = false
    }


}


creditNum.addEventListener("input", function () {
    if (creditNum.value.length > 16) {
        creditNum.value = creditNum.value.slice(0, 16);
    }
});

let expiration = document.getElementById("expiration");

expiration.addEventListener("input", function () {
    let value = expiration.value;

    if (value.length === 2 && value.indexOf("/") === -1) {
        value = value + "/";
        expiration.value = value;
    }
});

let cvv = document.getElementById("cvv")
cvv.addEventListener("input", function () {
    if (cvv.value.length > 3) {
        cvv.value = cvv.value.slice(0, 3);
    }
});




expiration.addEventListener("input", function () {
    if (expiration.value.length > 5) {
        expiration.value = expiration.value.slice(0, 5);
    }
});

function checkPayment() {
    if (CVVValid && EXValid && CCValid) {
        // Show the confirmDetails section
        document.getElementById("confirmDetails").style.display = "flex";

        // Hide the paymentsection section
        document.getElementById("paymentsection").style.display = "none";

        // Populate the fields in the confirmDetails section
        document.getElementById("firstName").textContent = firstNameVar;
        document.getElementById("lastName").textContent = lastNameVar;
        document.getElementById("yourAddress").textContent = addressVar;
        document.getElementById("emailID").textContent = emailVar;
        document.getElementById("phoneID").textContent = phoneVar;
        document.getElementById("cityInfo").textContent += cityVar;
        document.getElementById("countryInfo").textContent += countryVar;
        document.getElementById("expirationDateInfo").textContent = expirationVal;
        document.getElementById("cvvInfo").textContent = thecvvVal;
        
        console.log(`${firstNameVar}, ${lastNameVar}, ${addressVar}, ${emailVar}, ${phoneVar}, ${cityVar}, ${countryVar}, ${expirationVal}, ${thecvvVal}`)
    }
}

function completeOrder() {
    document.getElementById("confirmDetails").style.display = "none"
    document.getElementById("finalPage").style.display = "flex"
}
const currentDate = new Date();

// Calculate the target date
const targetDate = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth() + 1, // Add one month
  currentDate.getDate() + 14 // Add two weeks
);

// Format the target date without time and timezone
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const targetDateString = targetDate.toLocaleDateString('en-US', options);

// Display the target date
document.getElementById("dd").textContent += targetDateString + ", between 7AM to 10PM";



function generateRandomNumber() {
    const min = 10000000; // Minimum 8-digit number (inclusive)
    const max = 99999999; // Maximum 8-digit number (inclusive)
    
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
  }
  
  const random8DigitNumber = generateRandomNumber();
  const onElement = document.getElementById("on");
  onElement.textContent += random8DigitNumber;
  

  