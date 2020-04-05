function openProject() {
  window.open("https://glitch.com/edit/#!/remix/model-viewer", "");
}

function themeSwitch() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

var planetsList = document.querySelector("#planets");

planetsList.addEventListener("selected", function() {
  var index = planetsList.index;
  openPlanetIndex(index);
});

function openPlanetIndex(index) {
  if (index == 0) {
    openPlanet("sun", "Sun");
  }
}

function openPlanet(planet, name) {
  window.location.href = "planets/" + planet + ".html";
}

var drawer = document.getElementsByTagName("mwc-drawer")[0];
var container = drawer.parentNode;
container.addEventListener("MDCTopAppBar:nav", function(e) {
  drawer.open = !drawer.open;
});
