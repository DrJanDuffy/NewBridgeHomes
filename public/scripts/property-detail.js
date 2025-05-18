
document.addEventListener('DOMContentLoaded', function() {
  // Get all gallery images
  const galleryImages = document.querySelectorAll('.gallery-image img');
  const mainImageContainer = document.querySelector('.main-image');
  
  // If there are no gallery images, exit early
  if (galleryImages.length === 0) return;
  
  // Create a main image element if it doesn't exist
  if (!mainImageContainer) {
    // Create the main image container
    const newMainImageContainer = document.createElement('div');
    newMainImageContainer.className = 'main-image';
    
    // Create the main image element
    const mainImg = document.createElement('img');
    mainImg.src = galleryImages[0].src;
    mainImg.alt = galleryImages[0].alt;
    
    // Add the main image to the container
    newMainImageContainer.appendChild(mainImg);
    
    // Insert before the gallery
    const gallery = document.querySelector('.property-gallery');
    gallery.parentNode.insertBefore(newMainImageContainer, gallery);
    
    // Update the layout classes
    document.querySelector('.property-gallery').className = 'property-gallery thumbnails';
  }
  
  // Add click event to each thumbnail
  galleryImages.forEach(img => {
    img.addEventListener('click', function() {
      // Update the main image
      document.querySelector('.main-image img').src = this.src;
      
      // Remove active class from all thumbnails
      galleryImages.forEach(thumb => thumb.parentNode.classList.remove('active'));
      
      // Add active class to clicked thumbnail
      this.parentNode.classList.add('active');
    });
  });
  
  // Set the first thumbnail as active
  galleryImages[0].parentNode.classList.add('active');
});
