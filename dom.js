window.addEventListener('load', function() {
    adjustConsonantContainerPadding();
  });
  
  window.addEventListener('resize', function() {
    adjustConsonantContainerPadding();
  });
  

  function adjustConsonantContainerPadding() {
    var pageControlsHeight = document.getElementById('page-controls').offsetHeight;
    var consonantContainer = document.getElementById('page-one');
    consonantContainer.style.paddingTop = pageControlsHeight+4 + 'px';
  }  
  

//make vowel div scrollable
const vowelContainer = document.getElementById("vowelContainer");
let isScrollable = false;

vowelContainer.addEventListener("mouseenter", () => {
  isScrollable = true;
  vowelContainer.style.overflowX = "scroll";
});

vowelContainer.addEventListener("mouseleave", () => {
  isScrollable = false;
  vowelContainer.style.overflowX = "hidden";
});

vowelContainer.addEventListener("wheel", (event) => {
  if (isScrollable) {
    event.preventDefault();
    vowelContainer.scrollLeft += event.deltaY;
  }
});



