(function setup() {
  //Setup sidebar links
  var sidebarLinks = document.getElementsByClassName("sidebar-link");
  for (var i = 0; i < sidebarLinks.length; i++) {
    var href = sidebarLinks[i].getAttribute("href").replace(/#/g, "");
    var target = document.getElementById(href);
    sidebarLinks[i].addEventListener("click", function(event) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    })
  }
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
  //Setup send button
  document.getElementById("send-btn").addEventListener("click", function() {
    console.log("Algún día se enviará el correo...");
  });
})()
