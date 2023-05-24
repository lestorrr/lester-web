//pogi ba ako charrr

window.addEventListener('DOMContentLoaded', event => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
    } else {
      navbarCollapsible.classList.add('navbar-shrink')
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 74,
    });
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });
})

window.addEventListener('DOMContentLoaded', event => {
    // Get the counter elements
    var counterContainer = document.getElementById("downloadCounterContainer");
    var counter = document.getElementById("downloadCounter");

    // Retrieve the initial count from localStorage or set it to 0
    var count = localStorage.getItem("downloadCount") || 0;

    // Update the counter element with the initial count
    counter.innerText = count;

    // Function to update the counter
    function updateCounter() {
      count++; // Increment the count by 1
      counter.innerText = count; // Update the counter element with the new count
      localStorage.setItem("downloadCount", count); // Store the updated count in localStorage
    }

    var downloadLinks = document.getElementsByClassName("button");
    for (var i = 0; i < downloadLinks.length; i++) {
      downloadLinks[i].addEventListener("click", updateCounter);
    }
  });

<div id="downloadCounterContainer">
  Downloads: <span id="downloadCounter">0</span>
</div>
