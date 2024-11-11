function sendPasswordResetLink() {
    const email = document.getElementById('email').value;

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Simulate sending email (this would typically be an API call)
    alert(`A password reset link has been sent to ${email}.`);
    
    // Here you would normally make an API call to your backend to send the email
    // Example: fetch('/api/send-reset-link', { method: 'POST', body: JSON.stringify({ email }) })
}
