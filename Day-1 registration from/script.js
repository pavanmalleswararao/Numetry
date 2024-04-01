function submitForm(event) {
    event.preventDefault();
  
    // Fetch form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // Validate password match
    if (password !== confirmPassword) {
      showMessage('Passwords do not match', 'error');
      return;
    }
  
    // Perform further validation if needed...
  
    // If all validations pass, display success message
    showMessage('Registration successful!', 'success');
  
    // You can perform additional actions here such as sending the data to a server
  }
  
  function showMessage(message, messageType) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = messageType;
  }
  