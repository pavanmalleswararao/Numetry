document.getElementById('userForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });
      
      if (response.ok) {
        alert('User created successfully');
      } else {
        throw new Error('Failed to create user');
      }
    } catch (error) {
      console.error(error.message);
      alert('Error: ' + error.message);
    }
  });
  