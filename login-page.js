document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = {
      username: username,
      password: password
    };

    try {
      const response = await fetch('http://localhost:8080/api/users/login', { // Adjusted URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      const data = await response.json();

      if (response.ok) {
        alert('Login successful!');
      } else {
        alert('Login failed: ' + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during login.');
    }
  });
});