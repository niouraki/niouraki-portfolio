let about = document.getElementById('about-button');
let portfolio = document.getElementById('portfolio-button');
let contact = document.getElementById('contact-button');
let arrow = document.getElementById('arrow-button');

//handle smooth scrolling
about.addEventListener('click', function() {
  window.scroll({
    top: 500,
    behavior: "smooth"
  });
});

portfolio.addEventListener('click', function() {
  window.scroll({
    top: 1200,
    behavior: "smooth"
  });
});

contact.addEventListener('click', function() {
  window.scroll({
    top: 3000,
    behavior: "smooth"
  });
});

arrow.addEventListener('click', function() {
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
});
