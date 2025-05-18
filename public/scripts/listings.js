
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Select DOM elements
  const priceFilter = document.getElementById('price');
  const bedsFilter = document.getElementById('beds');
  const bathsFilter = document.getElementById('baths');
  const applyFiltersBtn = document.querySelector('.filter-container .btn');
  const propertyCards = document.querySelectorAll('.property-card');
  
  // Apply filters when button is clicked
  applyFiltersBtn.addEventListener('click', filterProperties);
  
  function filterProperties() {
    // Get filter values
    const priceRange = priceFilter.value;
    const minBeds = bedsFilter.value;
    const minBaths = bathsFilter.value;
    
    // Convert price range to min and max values
    let minPrice = 0;
    let maxPrice = Number.MAX_SAFE_INTEGER;
    
    if (priceRange) {
      const [min, max] = priceRange.split('-').map(val => parseInt(val));
      minPrice = min;
      maxPrice = max || Number.MAX_SAFE_INTEGER;
    }
    
    // Loop through all property cards
    propertyCards.forEach(card => {
      // Get property details
      const price = parseInt(card.querySelector('.price').textContent.replace(/[$,]/g, ''));
      const beds = parseInt(card.querySelector('.property-features span:nth-child(1)').textContent);
      const baths = parseFloat(card.querySelector('.property-features span:nth-child(2)').textContent);
      
      // Check if the property meets all filter criteria
      const priceMatch = price >= minPrice && price <= maxPrice;
      const bedsMatch = !minBeds || beds >= parseInt(minBeds);
      const bathsMatch = !minBaths || baths >= parseFloat(minBaths);
      
      // Show or hide the property card
      if (priceMatch && bedsMatch && bathsMatch) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
    
    // Update the count of visible properties
    const visibleCount = document.querySelectorAll('.property-card[style="display: block;"]').length;
    updateFilterResults(visibleCount);
  }
  
  // Function to update the results message
  function updateFilterResults(count) {
    // Create or update results message
    let resultsMsg = document.querySelector('.filter-results');
    
    if (!resultsMsg) {
      resultsMsg = document.createElement('div');
      resultsMsg.className = 'filter-results';
      document.querySelector('.listings-filter').appendChild(resultsMsg);
    }
    
    resultsMsg.textContent = `Showing ${count} ${count === 1 ? 'property' : 'properties'}`;
  }
});
