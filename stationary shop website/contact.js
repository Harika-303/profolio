function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var errorMessage = document.getElementById("error-message");

    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        errorMessage.innerHTML = "All fields are required.";
        errorMessage.style.color = "red";
        return false;
    } else if (!email.match(emailPattern)) {
        errorMessage.innerHTML = "Invalid email address.";
        errorMessage.style.color = "red";
        return false;
    } else {
        errorMessage.innerHTML = ""; // Clear any previous error messages
        return true;
    }
}
