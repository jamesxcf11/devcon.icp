document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('form-message').innerText = 'Thank you for your message!';
    document.getElementById('form-message').classList.remove('hidden');
    this.reset();
});
