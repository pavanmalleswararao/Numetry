// Add JavaScript for interactivity if needed
// JavaScript code in script.js

// Wait for the document to be fully loaded before executing any JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get the "Apply Now" button element by its class
    const applyButton = document.querySelector('.cta-btn');

    // Add a click event listener to the button
    applyButton.addEventListener('click', function(event) {
        // Prevent the default behavior of the button (e.g., submitting a form or following a link)
        event.preventDefault();

        // Display an alert message when the button is clicked
        alert('Thank you for your interest in XYZ School! Your application has been received.');
    });
});
