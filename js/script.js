// ====== Smooth Scroll for Navigation Links ======
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    // Get target section
    const target = document.querySelector(this.getAttribute('href'));
    
    // Scroll smoothly to section
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// ====== Simple Form Alert (optional) ======
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // stop page from reloading

  alert("Thank you for reaching out! I’ll get back to you soon 😊");
  form.reset(); // clear the form fields
});
