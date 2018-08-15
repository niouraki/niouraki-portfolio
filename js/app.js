let about = document.querySelector('#about-button');
let portfolio = document.getElementById('portfolio-button');
let contact = document.getElementById('contact-button');

about.addEventListener('click', function() {
  window.scroll({
    top: 420,
    behavior: "smooth"
  });
})

portfolio.addEventListener('click', function() {
  window.scroll({
    top: 780,
    behavior: "smooth"
  });
})

contact.addEventListener('click', function() {
  window.scroll({
    top: 3000,
    behavior: "smooth"
  });
})
