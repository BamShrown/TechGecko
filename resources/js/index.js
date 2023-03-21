function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);

setTimeout(function() {
  var revealDiv = document.querySelector('.revealdelay');
  revealDiv.classList.add('active');
}, 1800);


setTimeout(function() {
  var heroImg = document.querySelector(".heroimg");
  heroImg.classList.add("rotate"); // Add the 'rotate' class to trigger the rotation animation
  heroImg.style.opacity = 1; // Set the opacity to 1 to trigger the fade in animation
}, 1000); // Wait 2 seconds before animating the image
