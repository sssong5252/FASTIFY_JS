document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the form from submitting
  
    var email = event.target.elements.email.value;
    var password = event.target.elements.psw.value;
  
    fetch('/api/login', { // change this to your API endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Login successful');
            // redirect or do something
        } else {
            alert('Login failed');
        }
     })
     .catch((error) => {
       console.error('Error:', error);
     });
  });
  