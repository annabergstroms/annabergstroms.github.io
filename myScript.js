/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
/*function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }*/



    /*function toggleMenu() {
        const menu = document.getElementById('menu');
        menu.classList.toggle('active');
      }*/



        function toggleMenu() {
          const menu = document.getElementById('menu');
          const hamburger = document.getElementById('hamburger');
        
          // Toggla klassen 'active' för att visa/stänga menyn
          menu.classList.toggle('active');
          hamburger.classList.toggle('active');
        
          // Byt ikon baserat på om menyn är öppen eller stängd
          if (menu.classList.contains('active')) {
            hamburger.innerHTML = '✖'; // Kryss
          } else {
            hamburger.innerHTML = '&#9776;'; // Hamburgersymbol
          }
        }
        