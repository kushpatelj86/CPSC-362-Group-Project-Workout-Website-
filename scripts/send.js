function create_user(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form data
    const formData = new FormData(document.querySelector('form'));
    
    // Convert form data to JSON object
    var jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });
  
    // Send data to backend using fetch API
    fetch('http://127.0.0.1:5000/create_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    })
      .then(response => response.json())
      .then(data => {
        // Handle response from backend
        console.log(data); // You can display a success message or perform other actions
      })
      .catch(error => {
        console.error('Error:', error);
      });



      document.getElementById('name').value = '';
      document.getElementById('age').value = '';
      document.getElementById('weight').value = '';
      document.getElementById('height').value = '';
      document.getElementById('allergies').value = 'none';

  }
