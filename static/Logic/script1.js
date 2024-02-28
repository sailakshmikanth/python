document.getElementById('sendOTP').addEventListener('click', function() {
    alert('OTP sent to your email.');
});

document.getElementById('resetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Password reset successful.');
    this.reset();
    window.location.href = "page1.1.html"; 
});
