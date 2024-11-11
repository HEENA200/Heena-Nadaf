function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.querySelector('input[placeholder="Confirm Password"]').value;

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false; // Prevent form submission
    }

    // Password validation
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false; // Prevent form submission
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false; // Prevent form submission
    }

    // If all validations pass, redirect to home page
    window.location.href = "home.html";
    return true;
}
