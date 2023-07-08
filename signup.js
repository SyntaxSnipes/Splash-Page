
let userMsg = document.querySelector("#userMsg");
let userWarning = document.querySelector("#userWarning");

function checkPassword(){
    let pass = document.querySelector("#pass").value;
    let repass = document.querySelector("#repass").value;
    let passStyle = document.querySelector("#pass").style;
    let repassStyle = document.querySelector("#repass").style;

if (pass === repass && pass !== "" && repass !== "") {
        passStyle.border = "2px solid green";
        repassStyle.border = "2px solid green";
        userWarning.textContent = "";
    } else if (pass === "" && repass === "") {
        passStyle.border = "2px solid white";
        repassStyle.border = "2px solid white";
        userWarning.textContent = "";
    } else {
        passStyle.border = "2px solid red";
        repassStyle.border = "2px solid red";
        userWarning.textContent = "Your passwords do not match";
    }
}  
document.querySelector("#pass").addEventListener("input", checkPassword);
document.querySelector("#repass").addEventListener("input", checkPassword);



function createAcc() {
    let userID = document.querySelector("#email").value;
    let pass = document.querySelector("#pass").value;
    let repass = document.querySelector("#repass").value;
    let userMsg = document.querySelector("#userMsg"); 
  
    if (pass == repass && userID.trim() !== '' && pass.trim() !== '' && repass.trim() !== '') {
      userMsg.style.color = "lime";
      userMsg.textContent = "You have successfully signed up.";
    } 
    else if (pass == repass && userID.trim() == '' && pass.trim() !== '' && repass.trim() !== '') {
      userMsg.style.color = "red";
      userMsg.textContent = "Please enter your email address";
    } 
    else if (pass.trim() == '' && repass.trim() == '' && userID.trim() !== ''){
        userMsg.style.color = "red";
        userMsg.textContent = "Please enter in your password";
    }
    else {
      userMsg.style.color = "red";
      userMsg.textContent = "Please retry entering your information";
    }
    console.log(`User: ${userID}, Pass: ${pass}`);
  }
  
    


