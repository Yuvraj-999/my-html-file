function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "navbar-lists") {
        x.className += " responsive";
    } else {
        x.className = "navbar-lists";
    }
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    // Basic validation (you can add more robust validation here)
    if (fullName === '' || email === '' || phone === '' || message === '') {
        alert('Please fill in all fields!');
        return;
    }

    // You would typically use AJAX or fetch here to send the form data to your server
    // For this example, we'll just display the data in an alert
    alert('Form submitted successfully!\n\n' +
          'Full Name: ' + fullName + '\n' +
          'Email: ' + email + '\n' +
          'Phone: ' + phone + '\n' +
          'Message: ' + message);

    // Reset the form (optional)
    document.getElementById('contactForm').reset();
});