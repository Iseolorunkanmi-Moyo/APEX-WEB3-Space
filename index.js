var menuBtn = document.getElementById("menuBtn")
var connectAccount = document.getElementById("connectAccount")
var mainSection = document.getElementById("main")
var navSecondDiv = document.getElementById("navSecondDiv")


menuBtn.addEventListener("click", menuFunction)
var menucount = 0;

function menuFunction(){
    if (menucount == 0) {
        navSecondDiv.style.display = "flex"
        mainSection.style.filter = " blur(5px)"
        menucount = 1
    }

    else if (menucount == 1) {
        navSecondDiv.style.display = "none"
        mainSection.style.filter = " blur(0px)"
        menucount = 0
    }

}


