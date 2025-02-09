document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitButton = document.getElementById('btn');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Validate Name
    function validateName() {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            return false;
        }
        nameError.textContent = '';
        return true;
    }

    // Validate Email
    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            return false;
        }
        emailError.textContent = '';
        return true;
    }

    // Validate Password
    function validatePassword() {
        if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long.';
            return false;
        }
        passwordError.textContent = '';
        return true;
    }

    // Validate entire form
    function validateForm() {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        // Enable or disable submit button
        submitButton.disabled = !(isNameValid && isEmailValid && isPasswordValid);
    }

    // Add input event listeners
    nameInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);

    // Handle form submission
    document.getElementById('myform').addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateName() && validateEmail() && validatePassword()) {
            alert('Form submitted successfully!');
        }
        else {
            alert('Please fix the errors in the form.');
            }
    
     });
});