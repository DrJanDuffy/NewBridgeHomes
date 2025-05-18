
// Add smooth scrolling to page links
document.addEventListener('DOMContentLoaded', function() {
  // Team member interaction 
  const teamMembers = document.querySelectorAll('.team-member');
  
  teamMembers.forEach(member => {
    member.addEventListener('mouseenter', function() {
      this.classList.add('active');
    });
    
    member.addEventListener('mouseleave', function() {
      this.classList.remove('active');
    });
  });
  
  // Additional functionality can be added here
});


document.addEventListener('DOMContentLoaded', function() {
  // Add additional team page interactivity if needed
  console.log('Team page loaded');
});
