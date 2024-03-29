
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
      var targetPageURL = '/index.html';

      // Redirect to the target webpage
      window.location.href = targetPageURL;
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

  
  
  
  