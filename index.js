var menuBtn = document.getElementById("menuBtn")
var connectAccount = document.getElementById("connectAccount")
var mainSection = document.getElementById("main")
var navSecondDiv = document.getElementById("navSecondDiv")


menuBtn.addEventListener("click", menuFunction)
var menucount = 0;

function menuFunction(){
    if (menucount == 0) {
        openMenu()
    }

    else if (menucount == 1) {
        closeMenu()
    }
}

function openMenu(){
    navSecondDiv.style.display = "flex"
    mainSection.style.filter = " blur(5px)"
    menucount = 1
}

function closeMenu(){
    navSecondDiv.style.display = "none"
    mainSection.style.filter = " blur(0px)"
    menucount = 0
}

var homeLink = document.getElementById("homeLink")
var homeSection  = document.getElementById("home")

homeLink.addEventListener("click", () => {
    homeSection.style.display = "flex"
    tokenomicsSection.style.display = "none"
    earnPointsSection.style.display = "none"
    contactSection.style.display = "none"


    var WIDTH_LIMIT = 1044;
    var windowWidth = window.innerWidth;
   
    if(windowWidth <= WIDTH_LIMIT) {
        closeMenu()
    } 
})

var tokenomicsLink = document.getElementById("tokenomicsLink")
var tokenomicsSection  = document.getElementById("tokenomics")

tokenomicsLink.addEventListener("click", () => {
    homeSection.style.display = "none"
    tokenomicsSection.style.display = "flex"
    earnPointsSection.style.display = "none"
    contactSection.style.display = "none"
    var WIDTH_LIMIT = 1044;
    var windowWidth = window.innerWidth;
   
    if(windowWidth <= WIDTH_LIMIT) {
        closeMenu()
    } 
})

var earnPointsLink = document.getElementById("earnPointsLink")
var earnPointsSection  = document.getElementById("earnPoints")

earnPointsLink.addEventListener("click", () => {
    homeSection.style.display = "none"
    tokenomicsSection.style.display = "none"
    earnPointsSection.style.display = "flex"
    contactSection.style.display = "none"
    var WIDTH_LIMIT = 1044;
    var windowWidth = window.innerWidth;
   
    if(windowWidth <= WIDTH_LIMIT) {
        closeMenu()
    } 
})

var contactLink = document.getElementById("contactLink")
var contactSection  = document.getElementById("contact")

contactLink.addEventListener("click", () => {
    homeSection.style.display = "none"
    tokenomicsSection.style.display = "none"
    earnPointsSection.style.display = "none"
    contactSection.style.display = "flex"
    var WIDTH_LIMIT = 1044;
    var windowWidth = window.innerWidth;
   
    if(windowWidth <= WIDTH_LIMIT) {
        closeMenu()
    } 
})
