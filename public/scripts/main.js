
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const nav = document.querySelector('nav');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking anywhere else
    document.addEventListener('click', function(event) {
      const isClickInsideNav = nav.contains(event.target);
      const isClickOnToggle = menuToggle.contains(event.target);
      
      if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('active')) {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
  }
  
  // Form submission handling
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // In a real application, you would send the form data to a server here
      // For now, we'll just show a success message
      const successMessage = document.createElement('div');
      successMessage.className = 'success-message';
      successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
      
      // Insert the message after the form
      form.parentNode.insertBefore(successMessage, form.nextSibling);
      
      // Reset the form
      form.reset();
      
      // Remove the success message after 5 seconds
      setTimeout(() => {
        successMessage.remove();
      }, 5000);
    });
  });
});
