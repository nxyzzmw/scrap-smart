function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if username and password are not empty
    if (username.trim() === "" || password.trim() === "") {
        alert("Username and password are required");
        return;
    }

    // For simplicity, you might want to connect to a backend for real authentication
    // For now, just redirect to the main app page (replace "index.html" with your home page)
    window.location.href = "index.html";
}