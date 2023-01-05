// SLIDER //

//variables
const allSlides = document.querySelector(".slide");
const allImages = document.querySelectorAll(".slide img");

const prev = document.querySelector("#prevBtn");
const next = document.querySelector("#nxtBtn");

let counter = 0; 
let size = allImages[0].clientWidth;

//click event listener that slides to the next image and goes back to the first image if it is currently on the last image.
next.addEventListener('click', ()=>{
    if(counter >= allImages.length - 1){
        //added size = allImages[0].clientWidth, to fix a bug where the slider sometimes wouldn't work,
        //because size was sometimes (seemingly randomly) set to 0.
        size = allImages[0].clientWidth;
        counter = 0;
        allSlides.style.transform = 'translateX(0px)';        
        textFade();
    } else {
    size = allImages[0].clientWidth;
    allSlides.style.transition = "transform 0.4s ease-in-out";
    counter++
    allSlides.style.transform = 'translateX(' + (-size * counter) + "px)";
    textFade();
    }
    
})
//click event listener that slides to the previous image and goes back to the last image if it is currently on the first image.
prev.addEventListener('click', ()=>{
    if(counter <= 0){ 
        size = allImages[0].clientWidth;  
        allSlides.style.transition = "transform 0.4s ease-in-out";      
        counter = 2;
        allSlides.style.transform = 'translateX(' + (-size * counter) + "px)";
        textFade();
    } else if(counter > 0){
    size = allImages[0].clientWidth;
    allSlides.style.transition = "transform 0.4s ease-in-out";   
    counter--
    allSlides.style.transform = 'translateX('+(-size * counter) + "px)";
    textFade();
    }
})

//function that makes text fade to the correspondent slide's text, using the same counter.
function textFade() {
    if (counter == 0) {
        document.getElementById("slide-text-1").style.opacity = "100%";
        document.getElementById("slide-text-2").style.opacity = "0%";
        document.getElementById("slide-text-3").style.opacity = "0%";
    } else if (counter == 1) {
        document.getElementById("slide-text-1").style.opacity = "0%";
        document.getElementById("slide-text-2").style.opacity = "100%";
        document.getElementById("slide-text-3").style.opacity = "0%";   
    } else if (counter == 2) {
        document.getElementById("slide-text-1").style.opacity = "0%";
        document.getElementById("slide-text-2").style.opacity = "0%";
        document.getElementById("slide-text-3").style.opacity = "100%";   
    }
}


// POPUPS //

//Open Popups

function firstPopup(){
    noBlur = screen.width;
    document.getElementById("popup1").style.visibility = "visible"; 
    document.getElementById("overlay").style.overflow = "hidden"; 
    console.log(noBlur);
    //added if statement for when screenwidth > 365px to improve performance
    if (noBlur > 375){
        document.getElementById("overlay").style.filter = "blur(1vw)"; 
    } else {
        document.querySelector(".close-mobile").style.visibility = "visible";
    }
}

function secondPopup(){
    noBlur = screen.width;
    document.getElementById("popup2").style.visibility = "visible"; 
    document.getElementById("overlay").style.overflow = "hidden"; 
    if (noBlur > 375){
        document.getElementById("overlay").style.filter = "blur(1vw)"; 
    } else {
        document.querySelector(".close-mobile").style.visibility = "visible";
    }
}

function thirdPopup(){
    noBlur = screen.width;
    document.getElementById("popup3").style.visibility = "visible"; 
    document.getElementById("overlay").style.overflow = "hidden"; 
    if (noBlur > 375){
        document.getElementById("overlay").style.filter = "blur(1vw)"; 
    } else {
        document.querySelector(".close-mobile").style.visibility = "visible";
    }  
}

function fourthPopup(){
    noBlur = screen.width;
    document.getElementById("popup4").style.visibility = "visible"; 
    document.getElementById("overlay").style.overflow = "hidden"; 
    if (noBlur > 375){
        document.getElementById("overlay").style.filter = "blur(1vw)"; 
    } else {
        document.querySelector(".close-mobile").style.visibility = "visible";
    } 
}

//Close Popups
function closeFirst(){
    document.getElementById("popup1").style.visibility = "hidden"; 
    document.getElementById("overlay").style.overflowY = "auto"; 
    document.getElementById("overlay").style.filter = "blur(0px)";  
    document.querySelector(".close-mobile").style.visibility = "hidden";
}

function closeSecond(){
    document.getElementById("popup2").style.visibility = "hidden";
    document.getElementById("overlay").style.overflowY = "auto"; 
    document.getElementById("overlay").style.filter = "blur(0px)";  
    document.querySelector(".close-mobile").style.visibility = "hidden";
}

function closeThird(){
    document.getElementById("popup3").style.visibility = "hidden"; 
    document.getElementById("overlay").style.overflowY = "auto"; 
    document.getElementById("overlay").style.filter = "blur(0px)";
    document.querySelector(".close-mobile").style.visibility = "hidden";  
}

function closeFourth(){
    document.getElementById("popup4").style.visibility = "hidden"; 
    document.getElementById("overlay").style.overflowY = "auto"; 
    document.getElementById("overlay").style.filter = "blur(0px)"; 
    document.querySelector(".close-mobile").style.visibility = "hidden";
}


// MENU //

//Shows/hides Menu
document.querySelector("#hidden-menu").style.left = "100%";
function changeMenu(x) {
    x.classList.toggle("change");
    if (document.querySelector("#hidden-menu").style.left == "100%"){
        document.getElementById("hidden-menu").style.left = "0%";
    }
    else {
        document.getElementById("hidden-menu").style.left = "100%";
    }
}

// SEARCH BOX //

// For desktop/tablet
function searchFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

//For mobile
function searchFunctionMobile() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("mobile-search-input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

//Shows search menu, and triggers an animation using "left" and "opacity".

function showData(){
    if(document.getElementById("hidden-search").style.visibility == "visible" && window.screen.width <= 375){
        document.getElementById("hidden-search").style.visibility = "hidden";
        document.getElementById("hidden-search").style.opacity = "0%";
        document.getElementById("hidden-search").style.left = "100%";
    }
    else if (document.getElementById("hidden-search").style.visibility == "visible" && window.screen.width > 375){
        document.getElementById("hidden-search").style.visibility = "hidden";
        document.getElementById("hidden-search").style.opacity = "0%";
    }
    else {  
        document.getElementById("hidden-search").style.opacity = "100%";     
        document.getElementById("hidden-search").style.visibility = "visible";
        document.getElementById("hidden-search").style.left = "50%";
    }
}

//Variables for rotating the search icon
let isRotated = false;
let screenWidth = screen.width;

//checks if viewport width is <= 375 px, then screenWidth = viewport width, otherwise change it to a value higher than 375, so rotateSearchIcon doesn't trigger.
window.addEventListener("resize", function() {
    if (window.matchMedia("(max-width: 375px)").matches) {
      screenWidth = screen.width;
    } else {
        screenWidth = screen.width;
        document.getElementById("search-icon").style.transform = 'rotate(0deg)';
    }
  })

//rotates the search icon if screenWidth <= 375
function rotateSearchIcon(){   
    if(isRotated == false && screenWidth <= 375) {
        document.getElementById("search-icon").style.transform = 'rotate(45deg)';
        isRotated = true;
    }
    else {
        document.getElementById("search-icon").style.transform = 'rotate(0deg)';
        isRotated = false;
    }
}


