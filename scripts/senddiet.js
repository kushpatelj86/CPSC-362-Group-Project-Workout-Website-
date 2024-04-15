

  function getFoodItems() {
    
    // Get form data

    var foodGroup = document.getElementById('food_group').value;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/get_food_items?food_group=' + foodGroup, true);
    xhr.onload = function () {
        if (xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
        } else {
            console.error('Error fetching food items: ' + xhr.status);
        }
    };
    xhr.send();


    document.getElementById('food_group').value = 'balanced';
    document.getElementById('allergies').value = 'none';
    document.getElementById('calories').value = '';

}



function displayFoodItems(event) {
  event.preventDefault(); // Prevent the default form submission

  const foodGroup = document.getElementById('food_group').value;

  fetch('http://127.0.0.1:5000/get_food_items?food_group=' + foodGroup)
.then(response => response.json())
.then(foods => {
  // Assuming you have a div with id 'userList' to display the users
  var foodListDiv = document.getElementById('diet');
  foodListDiv.innerHTML = ''; // Clear previous content
  foods.forEach((food,index) => {
    if(index === (food.length - 1))
    {
      var foodItem = document.createElement('div');
      foodItem.textContent = food
      foodListDiv.appendChild(foodItem);
    }
  });



})
.catch(error => {
  alert(error);
});



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







