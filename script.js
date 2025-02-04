document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('thankYouMessage').style.display = 'block';
    document.getElementById('registerForm').reset();
  });
  