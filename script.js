const navItem1 = document.querySelector('.nav-item-1');
const dropdownMenu = document.querySelector('.dropdown-menu');
const navIconLeft = document.querySelector('.nav-icon-left');
const navIconDown = document.querySelector('.nav-icon-down');

navIconDown.style.display = 'none'; // Initially hide the nav-icon-down

navItem1.addEventListener('click', dropDownActivate);

function dropDownActivate() {
  dropdownMenu.classList.toggle('active');
  
  if (navIconLeft.style.display === 'none') {
    navIconLeft.style.display = 'block';
  } else {
    navIconLeft.style.display = 'none';
  }
  
  if (navIconDown.style.display === "block") {
    navIconDown.style.display = "none";
  } else {
    navIconDown.style.display = "block";
  };
}

const navItem2 = document.querySelector('.nav-item-2');
const navItem3 = document.querySelector('.nav-item-3');
const fullscreenIframe = document.getElementById('fullscreen-iframe');
const backgroundOverlay = document.getElementById('background-overlay');

navItem2.addEventListener('click', showFullscreenIframe);
navItem3.addEventListener('click', showFullscreenIframe);

function showFullscreenIframe() {
  fullscreenIframe.src = 'https://example.com'; // Replace with the desired URL
  fullscreenIframe.style.display = 'block';
  backgroundOverlay.style.display = 'block'; // Show the background overlay
}

// To close the iframe and background overlay when clicking outside the iframe, you can add the following code:
backgroundOverlay.addEventListener('click', () => {
  fullscreenIframe.style.display = 'none';
  fullscreenIframe.src = '';
  backgroundOverlay.style.display = 'none'; // Hide the background overlay
});