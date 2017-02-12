(function setup() {
  //Setup social media buttons highlight functionality
  var buttons = document.getElementsByClassName("social-media");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseover", function(event) {
      event.srcElement.classList.add("highlight");
    });
    buttons[i].addEventListener("mouseleave", function(event) {
      event.srcElement.classList.remove("highlight");
    })
  }
})()
