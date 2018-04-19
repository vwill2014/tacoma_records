

// This is the new code to make each picture pop up with its unique modal for each artist
// this code is not working

// the current html code has been changed to make the current code work so the ids and class do not match

// new code begins here/////////

// var btn = document.getElementByClass("click-to-open");

// for (var i = 0; i < btn.length; i++) {
//     var thisBtn = btn[i];
//     thisBtn.addEventListener("click", function(){
//       var modal = document.getElementById(this.dataset.modal);
//       modal.style.display = "block";
//   }, false);


// new code notes:

// for the above code to work: modals must have unique ids as demonstrated below
// <div id="modal-window-one" class="modal-window modal"></div>
// <div id="modal-window-two" class="modal-window modal"></div>

// each button must also be defined to know which window to open when clicked

/* <div class="click-to-open" data-modal="modal-window-one"> //will open modal one
<div class="click-to-open" data-modal="modal-window-two"> //will open modal two */

// //////////////////////////////////////////////////////////////////////////////////////



// Current code that is working, but it only highlights one artist




// // Get the modal
// var modal = document.getElementById('myModal');

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }