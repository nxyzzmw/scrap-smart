function validateSignup() {
    var newUsername = document.getElementById('new-username').value;
    var newPassword = document.getElementById('new-password').value;
    var postalCode = document.getElementById('postal-code').value;

    // Check if new username, password, and postal code are not empty
    if (newUsername.trim() === "" || newPassword.trim() === "" || postalCode.trim() === "") {
        alert("All fields are required for sign up");
        return;
    }

    // For simplicity, you might want to connect to a backend to create a new user
    // For now, just alert the user that sign up was successful
    alert("Sign up successful! You can now log in.");

    // Redirect the user to the home page after successful sign-up
    window.location.href = "home.html";
}
