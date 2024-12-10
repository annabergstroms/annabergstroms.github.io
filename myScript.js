/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
/*function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }*/




    document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.getElementById("hamburger");
        const navLinks = document.getElementById("nav-links");
      
        hamburger.addEventListener("click", function () {
          navLinks.classList.toggle("active");
        });
      });