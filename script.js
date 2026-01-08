// Mobile Navigation Toggle
document.getElementById('nav-toggle').addEventListener('click', function() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('active');
});

// Form Validation for Enquiry Form
document.getElementById('enquiry-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // If valid, you can add code here to send the form data (e.g., via AJAX)
    alert('Enquiry sent successfully!'); // Placeholder for success
    // Reset form
    this.reset();
});
