// ############################### toggle page1 page2
  function togglePages() {
    var pageOne = document.getElementById("page-one");
    var pageTwo = document.getElementById("page-two");
    var toggleButton = document.getElementById("toggle-pages");
    var toggleButtonTitle = document.getElementById("toggle-pages-title");

    if (pageOne.style.display === "none") {
      pageOne.style.display = "block";
      pageTwo.style.display = "none";
      toggleButtonTitle.innerHTML = "Learn and test";
      toggleButton.innerHTML = "<b><span>Study <<</span></b>";
      document.querySelectorAll('.counter-button').forEach(button => {  button.style.display = 'inline';});
      //document.getElementById("most-used").style.display = 'inline';
      document.querySelectorAll('.reset').forEach(button => {  button.style.display = 'inline';});
    } else {
      pageOne.style.display = "none";
      pageTwo.style.display = "block";
      toggleButtonTitle.innerHTML = "Reference when reading Thai";
      toggleButton.innerHTML = "<b><span>Overview >></span></b>";
      document.querySelectorAll('.counter-button').forEach(button => {  button.style.display = 'none';});
      //document.getElementById("most-used").style.display = 'none';
      document.querySelectorAll('.reset').forEach(button => {  button.style.display = 'none';});
    }
  }


//################################## change font
var selectedFont = 'Sarabun'; // Default selected font

function toggleFont() {
    if (selectedFont === 'Sarabun') {
      selectedFont = 'IBM Plex Sans Thai';
      document.getElementById('font-toggle-button').innerHTML = "<b>Modern</b>";
    } else {
      selectedFont = 'Sarabun';
      document.getElementById('font-toggle-button').innerHTML = "<b>Classic</b>";
    }
    applySelectedFont();
  }


function applySelectedFont() {
  var elements = document.querySelectorAll('.inner-box1, .vowel-inner-box1, .tile, .pop-inner-box2');
  for (var i = 0; i < elements.length; i++) {
    if (selectedFont === 'Sarabun') {
      elements[i].style.fontFamily = '';
    } else {
      elements[i].style.fontFamily = selectedFont + ', sans-serif';
    }
  }
}


//############################### toggle dark mode. executes css variables
const toggleDarkMode = () => {
    const root = document.documentElement;
    const darkModeButton = document.getElementById("dark-mode-button");

    root.classList.toggle('dark-mode');

    if (darkModeButton.innerHTML === "<b>Dark</b>") {
        darkModeButton.innerHTML = "<b>Light</b>";
    } else {
        darkModeButton.innerHTML = "<b>Dark</b>";
    }
};