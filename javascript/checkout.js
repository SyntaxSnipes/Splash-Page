
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
        firstName.style.background = "rgba(227, 141, 141, 0.8)"
        firstName.style.border = "2px solid red"
        fnValid = false

    }
    else{
        fnWarning.textContent = ""; // Clear the warning message
        firstName.style.background = "black"; // Reset background
        firstName.style.color = "grey"
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
        lastName.style.background = "black"; // Reset background
        lastName.style.color = "grey"
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
        address.style.background = "black";
        address.style.color = "grey";
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
        email.style.background = "black";
        email.style.color = "grey"
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
        phone.style.background = "black";
        phone.style.color = "grey";
        phone.style.border = "2px solid grey"
        phoneValid = true
        phoneVar += phone.value

    }
    console.log("fnValid:", fnValid);
    console.log("lnValid:", lnValid);
    console.log("addressValid:", addressValid);
    console.log("emailValid:", emailValid);
    console.log("phoneValid:", phoneValid);

    isCC();
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
    let cnumLastThree = cnumValue.slice(-3); // Get the last three characters of the input

    visa.style.opacity = "10%";
    amex.style.opacity = "10%";
    masterCard.style.opacity = "10%";

    if (cnumValue.length >= 3) {
        if (cnumValue.charAt(0) == '3') {
            amex.style.opacity = "100%";
        } else if (cnumValue.charAt(0) == '4') {
            visa.style.opacity = "100%";
        } else if (cnumValue.charAt(0) == '5') {
            masterCard.style.opacity = "100%";
        }
    }

    // Update the text content of the element with the extracted last three numbers
    document.getElementById("creditNumInfo").textContent += cnumLastThree;
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
        expiration.style.background = "black";
        expiration.style.color = "grey"
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
        cvv.style.background = "black";
        cvv.style.color = "grey";
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
    let cnumFirstDigit = cnumValue.charAt(0);
    let cnumLength = cnumValue.length;

    if ((cnumFirstDigit === '3' && cnumLength === 15) || ((cnumFirstDigit === '4' || cnumFirstDigit === '5') && cnumLength === 16)) {
        // Valid starting digit and length, reset styles
        creditNum.style.background = "black";
        creditNum.style.color = "grey"
        creditNum.style.border = "2px solid grey";
        CCValid = true;
        creditNumVar += creditNum.value;
    } else {
        // Invalid starting digit or length, show error styles
        creditNum.style.background = "rgba(227, 141, 141, 0.4)";
        creditNum.style.border = "2px solid red";
        CCValid = false;
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

        // Clear the previous content
        document.getElementById("firstName").textContent = "";
        document.getElementById("lastName").textContent = "";
        document.getElementById("yourAddress").textContent = "";
        document.getElementById("emailID").textContent = "";
        document.getElementById("phoneID").textContent = "";
        document.getElementById("cityInfo").textContent = "";
        document.getElementById("countryInfo").textContent = "";
        document.getElementById("expirationDateInfo").textContent = "";
        document.getElementById("cvvInfo").textContent = "";

        // Populate the fields in the confirmDetails section
        document.getElementById("firstName").textContent = firstNameVar;
        document.getElementById("lastName").textContent = lastNameVar;
        document.getElementById("yourAddress").textContent = addressVar;
        document.getElementById("emailID").textContent = emailVar;
        document.getElementById("phoneID").textContent = phoneVar;
        document.getElementById("cityInfo").textContent = cityVar;
        document.getElementById("countryInfo").textContent = countryVar;
        document.getElementById("expirationDateInfo").textContent = expirationVal;
        document.getElementById("cvvInfo").textContent = CVVValid ? thecvvVal : ""; // Only add CVV if it's valid
        
        // Update the text content of the element with the masked card number only if it's valid
        if (CCValid) {
            document.getElementById("creditNumInfo").textContent = "XXXXXXXXXXXXX" + creditNum.value.slice(-3);
        }
    }
}

function payAlert(){
    alert("Introducing PIS ShieldPay, our Super Secure Payment System: Your ultimate solution for safeguarding online transactions. Brought to you by PIS, it employs cutting-edge encryption and tokenization, ensuring end-to-end protection of sensitive data. With PCI DSS compliance, AI-powered fraud detection, and multi-factor authentication, your customers' information remains impenetrable. Our vigilant 24/7 monitoring and regular audits elevate user trust, securing your credentials and accounts.")
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
  

  document.addEventListener('DOMContentLoaded', function () {
    // Get the #details element
    var detailsElement = document.getElementById('details');

    // Get the current height of #details
    var detailsHeight = detailsElement.clientHeight;

    // Check if the height is greater than 100dvh
    if (detailsHeight > (100 * window.innerHeight / 100)) {
        // If it is, set height to max-content
        detailsElement.style.height = 'max-content';
    } else {
        // If it's not, set height to 100dvh
        detailsElement.style.height = '100vh';
    }
});

// script.js

// Get all buttons by their IDs
const buttons = ['#ptpbtn', '#cpbtn', '#cOrd', '#homeBtn'];

// When the user scrolls down, show/hide the buttons
window.onscroll = function() {
    buttons.forEach(scrollFunction);
};


// Add click event listeners to each button to scroll to the top
buttons.forEach(buttonId => {
    const button = document.querySelector(buttonId);
    button.addEventListener('click', () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
});



$(document).ready(function () {
    var logonav = $('.logonav'); // Assuming logonav has the class 'logonav'
    var lastScrollTop = 0;

    // Function to handle opacity change
    function setOpacity(opacity) {
        logonav.css({
            'opacity': opacity,
            'transition': 'opacity 0.5s ease' // Adjust the transition duration as needed
        });
    }

    // Set initial opacity
    setOpacity(0.2);

    // Scroll event listener
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();

        // Check the scroll direction
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            setOpacity(Math.max(0.1, 1 - scrollTop / 200));
        } else {
            // Scrolling up
            setOpacity(1);
        }

        // Update the last scroll position
        lastScrollTop = scrollTop;
    });

    // Hover event listener
    logonav.hover(
        // Handler for mouseenter
        function () {
            // Set opacity to 1 on hover
            setOpacity(1);
        },
        // Handler for mouseleave
        function () {
            // Reset opacity to its original state after hover
            setOpacity(0.2);
        }
    );

    // Click/touch event listener
    logonav.on('click touchstart', function () {
        // Increase opacity to 1
        setOpacity(1);
    });
});
