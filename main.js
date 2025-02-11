// Get the button element
let mybutton = document.getElementById("myFxdBtn");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
    scrollFunction();
    navscroll();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Scroll to the top of the document when the button is clicked
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}


// Add event listener to the button to scroll to the top when clicked
mybutton.addEventListener("click", topFunction);