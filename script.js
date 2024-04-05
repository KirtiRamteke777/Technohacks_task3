
        document.getElementById('loginForm').addEventListener('submit', function(event) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMsg = document.getElementById('error-msg');

    // Example of basic front-end validation
    if (username.trim() === '' || password.trim() === '') {
        errorMsg.textContent = 'Please enter both username and password.';
        event.preventDefault(); // Prevent form submission
    } else {
        errorMsg.textContent = ''; // Clear previous error message
        // You can optionally hash the password here before sending it to the server
        // For example:
        // password = hashFunction(password);
    }
});
