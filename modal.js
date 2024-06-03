// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var img = document.querySelectorAll('.row .column .content img');
var container = document.getElementById("modalContainer");
var modalInfo = document.querySelectorAll(".row .column .content .additional-info");

img.forEach(function(image) {
  image.onclick = function(){
    modal.style.display = "block";
    modalInfo.style.display = "block";
  }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}