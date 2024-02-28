document.getElementById('sendOTP').addEventListener('click', function() {
    alert('OTP sent for verification.');
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Sign up successful.');
    this.reset();
    window.location.href = "page1.1.html";
});
