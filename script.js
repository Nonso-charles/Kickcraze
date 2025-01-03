      // Select the toggle button and nav-links container
      const toggleBtn = document.querySelector('.toggle-btn');
      const navLinks = document.querySelector('.nav-links');

      // Add event listener to toggle button
      toggleBtn.addEventListener('click', () => {
          navLinks.classList.toggle('active');
      });
      
      
      
      // Select all the cards
const cards = document.querySelectorAll('.card');

// Add a click event listener to each card
cards.forEach((card) => {
    card.addEventListener('click', () => {
        // Toggle the 'flipped' class
        card.classList.toggle('flipped');
    });
});
