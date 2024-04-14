function create_diet(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form data
    const foodGroup = document.getElementById('food_group').value;
    
    // Convert form data to JSON object
    
    

    // Send data to backend using fetch API
    fetch('http://127.0.0.1:5000/create_diet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ food_group: foodGroup }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle response from backend
        console.log(data); // You can display a success message or perform other actions
      })
      .catch(error => {
        console.error('Error:', error);
      });

      var mess = document.getElementById('diet');
      mess.innerHTML = "diet created suuccesfully"; // Clear previous content





    document.getElementById('food_group').value = 'balanced';
    document.getElementById('allergies').value = 'none';
    document.getElementById('calories').value = '';
    
  }





  function get_diet(event) {
    event.preventDefault(); // Prevent the default form submission

    

fetch('http://127.0.0.1:5000/get_diet')
.then(response => response.json())
.then(meals => {
  // Assuming you have a div with id 'userList' to display the users
  var userListDiv = document.getElementById('diet');
  userListDiv.innerHTML = ''; // Clear previous content
  
  meals.forEach((meal,index) => {
  
      var mealItem = document.createElement('div');
      mealItem.textContent = `Food Name: ${meal[0]}, Food ID: ${meal[1]}, Calories: ${meal[2]}, Carbs: ${meal[3]}, FATS: ${meal[4]}, 
      PROTEINS: ${meal[5]} , Fiber: ${meal[6]} , Food Group: ${meal[7]} , length:${meals.length}, count: ${index}`
      userListDiv.appendChild(mealItem);
    
  });



})
.catch(error => {
  console.error('Error:', error);
});
  
  }  







