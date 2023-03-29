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

const navItem7 = document.querySelector('.nav-item-7');
const dropdownMenu7 = document.querySelector('.dropdown-menu-7');
const expandMoreIcon = document.querySelector('.nav-item-7 .icon-expand-more');
const chevronRightIcon = document.querySelector('.nav-item-7 .icon-chevron-right');

// Add an event listener for click on nav-item-7
navItem7.addEventListener('click', toggleDropdownMenu7);

// Function to toggle the dropdown menu for nav-item-7
function toggleDropdownMenu7() {
  navItem7.classList.toggle('expanded');
  
  if (navItem7.classList.contains('expanded')) {
    expandMoreIcon.style.display = 'none';
    chevronRightIcon.style.display = 'inline';
  } else {
    expandMoreIcon.style.display = 'inline';
    chevronRightIcon.style.display = 'none';
  }
}

const navItem4 = document.querySelector('.nav-item-4');

// Add an event listener for the click event on nav-item-4
navItem4.addEventListener('click', () => {
  window.location.href = 'document_edit.html';
});