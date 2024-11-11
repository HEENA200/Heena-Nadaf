function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Username validation (for example, should not be empty)
    if (username.trim() === "") {
        alert("Username cannot be empty.");
        return false; // Prevent form submission
    }

    // Password validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false; // Prevent form submission
    }

    // If all validations pass, redirect to home page
    window.location.href = "home.html"; // Redirects to home page
    return true; // This return is not strictly necessary here
}
