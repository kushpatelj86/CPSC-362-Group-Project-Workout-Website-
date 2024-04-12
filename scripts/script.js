
function calcBMI(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;


    let bmi = Math.round(((weight / (height * height) * 703 )) * 10) / 10;

    document.getElementById("BMI-Heading").innerHTML = "Your BMI is: ";
    
    
    if(isNaN(weight) || isNaN(height) || weight == null || height == null || weight == "" || height == "")
    {
        
        
        document.getElementById("BMI-Heading").innerHTML = "Please Enter Both Height and Weight ";
        document.getElementById("BMI").innerHTML = "";
        document.getElementById("Health-Status").innerHTML = "Unable to calculate to BMI";


        
    }
    else
    {
        document.getElementById("BMI-Heading").innerHTML = "Your BMI is: ";
        document.getElementById("BMI").innerHTML = bmi;

            if(bmi < 18.5)
            {
                document.getElementById("Health-Status").innerHTML = "You are underweight. Consider nutritional consultation with us to assess your diet";
            }
            else if (bmi >= 18.5 && bmi <= 24.9)
            {
                document.getElementById("Health-Status").innerHTML = "You are a healthy weight. Mantain your current diet and excercise routine."; 
            }
            else if (bmi >= 25 && bmi <= 29.9)
            {
                document.getElementById("Health-Status").innerHTML = "You are overweight. Consider moderate excercise and consulting us to review your diet.";
            }
            else if (bmi >= 30)
            {
                document.getElementById("Health-Status").innerHTML = "You have Obesity. It's important to seek consulting from us to develop a personalized diet and excercise plan.";
            }
            else
            {
                
            }
    }

    
}

function reload()
{
    window.location.reload();
}

function displayWeeklyWorkouts() {
    var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    days.forEach(day => {
      var selectedWorkouts = [];
      var checkboxes = document.querySelectorAll(`input[name='${day}']:checked`);
      checkboxes.forEach((checkbox) => {
        selectedWorkouts.push(checkbox.value);
      });
      document.getElementById(`display${capitalize(day)}`).innerHTML = `${capitalize(day)}'s Selected Workouts: ` + selectedWorkouts.join(", ");
    });
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  function displayWeeklyWorkouts() {
    var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    days.forEach(day => {
      var selectedWorkouts = [];
      var checkboxes = document.querySelectorAll(`input[name='${day}']:checked`);
      checkboxes.forEach((checkbox) => {
        selectedWorkouts.push(checkbox.value);
      });
      document.getElementById(`display${capitalize(day)}`).innerHTML = `${capitalize(day)}'s Selected Workouts: ` + selectedWorkouts.join(", ");
    });
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


  function generatePlan(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    document.getElementById('plan').innerHTML = `Loading...`;

    fetch('/api/users')
    .then(response => response.json())
    .then(data => {
        document.getElementById('plan').innerHTML = JSON.stringify(data, null, 2);
    })
    .catch(err => {
        console.error('Error:', err);
        document.getElementById('plan').innerHTML = `Error fetching data`;
    });
}









"""


function calcBMI(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;


    let bmi = Math.round(((weight / (height * height) * 703 )) * 10) / 10;

    document.getElementById("BMI-Heading").innerHTML = "Your BMI is: ";
    
    
    if(isNaN(weight) || isNaN(height) || weight == null || height == null || weight == "" || height == "")
    {
        
        
        document.getElementById("BMI-Heading").innerHTML = "Please Enter Both Height and Weight ";
        document.getElementById("BMI").innerHTML = "";
        document.getElementById("Health-Status").innerHTML = "Unable to calculate to BMI";


        
    }
    else
    {
        document.getElementById("BMI-Heading").innerHTML = "Your BMI is: ";
        document.getElementById("BMI").innerHTML = bmi;

            if(bmi < 18.5)
            {
                document.getElementById("Health-Status").innerHTML = "You are underweight. Consider nutritional consultation with us to assess your diet";
            }
            else if (bmi >= 18.5 && bmi <= 24.9)
            {
                document.getElementById("Health-Status").innerHTML = "You are a healthy weight. Mantain your current diet and excercise routine."; 
            }
            else if (bmi >= 25 && bmi <= 29.9)
            {
                document.getElementById("Health-Status").innerHTML = "You are overweight. Consider moderate excercise and consulting us to review your diet.";
            }
            else if (bmi >= 30)
            {
                document.getElementById("Health-Status").innerHTML = "You have Obesity. It's important to seek consulting from us to develop a personalized diet and excercise plan.";
            }
            else
            {
                
            }
    }

    
}

function reload()
{
    window.location.reload();
}

function displayWeeklyWorkouts() {
    var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    days.forEach(day => {
      var selectedWorkouts = [];
      var checkboxes = document.querySelectorAll(`input[name='${day}']:checked`);
      checkboxes.forEach((checkbox) => {
        selectedWorkouts.push(checkbox.value);
      });
      document.getElementById(`display${capitalize(day)}`).innerHTML = `${capitalize(day)}'s Selected Workouts: ` + selectedWorkouts.join(", ");
    });
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  function displayWeeklyWorkouts() {
    var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    days.forEach(day => {
      var selectedWorkouts = [];
      var checkboxes = document.querySelectorAll(`input[name='${day}']:checked`);
      checkboxes.forEach((checkbox) => {
        selectedWorkouts.push(checkbox.value);
      });

      
      document.getElementById(`display${capitalize(day)}`).innerHTML = `${capitalize(day)}'s Selected Workouts: ` + selectedWorkouts.join(', ');
      
      fetch('http://127.0.0.1:3456/workout/plan')
    .then(response => response.json() )
    .then(data => {
        a = JSON.stringify(data, null, 2);
        document.getElementById(`display${capitalize(day)}`).innerHTML += `(${a})`

    })
    .catch(err => {
      
        document.getElementById(`display${capitalize(day)}`).innerHTML += `(${err.message})`

    });





    });
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


  function generatePlan(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    document.getElementById('plan').innerHTML = `Loading...`;

    fetch('http://127.0.0.1:3456/users')
    .then(response => response.json() )
    .then(data => {
        document.getElementById('plan').innerHTML = JSON.stringify(data, null, 2);
    })
    .catch(err => {
        document.getElementById('plan').innerHTML = `Error fetching data: ${err.message}`;
    });
}




function calcBMI(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;


    let bmi = Math.round(((weight / (height * height) * 703 )) * 10) / 10;

    document.getElementById("BMI-Heading").innerHTML = "Your BMI is: ";
    
    
    if(isNaN(weight) || isNaN(height) || weight == null || height == null || weight == "" || height == "")
    {
        
        
        document.getElementById("BMI-Heading").innerHTML = "Please Enter Both Height and Weight ";
        document.getElementById("BMI").innerHTML = "";
        document.getElementById("Health-Status").innerHTML = "Unable to calculate to BMI";


        
    }
    else
    {
        document.getElementById("BMI-Heading").innerHTML = "Your BMI is: ";
        document.getElementById("BMI").innerHTML = bmi;

            if(bmi < 18.5)
            {
                document.getElementById("Health-Status").innerHTML = "You are underweight. Consider nutritional consultation with us to assess your diet";
            }
            else if (bmi >= 18.5 && bmi <= 24.9)
            {
                document.getElementById("Health-Status").innerHTML = "You are a healthy weight. Mantain your current diet and excercise routine."; 
            }
            else if (bmi >= 25 && bmi <= 29.9)
            {
                document.getElementById("Health-Status").innerHTML = "You are overweight. Consider moderate excercise and consulting us to review your diet.";
            }
            else if (bmi >= 30)
            {
                document.getElementById("Health-Status").innerHTML = "You have Obesity. It's important to seek consulting from us to develop a personalized diet and excercise plan.";
            }
            else
            {
                
            }
    }

    
}

function reload()
{
    window.location.reload();
}

function displayWeeklyWorkouts() {
    var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    days.forEach(day => {
      var selectedWorkouts = [];
      var checkboxes = document.querySelectorAll(`input[name='${day}']:checked`);
      checkboxes.forEach((checkbox) => {
        selectedWorkouts.push(checkbox.value);
      });
      document.getElementById(`display${capitalize(day)}`).innerHTML = `${capitalize(day)}'s Selected Workouts: ` + selectedWorkouts.join(", ");
    });
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  function displayWeeklyWorkouts() {
    var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    days.forEach(day => {
      var selectedWorkouts = [];
      var checkboxes = document.querySelectorAll(`input[name='${day}']:checked`);
      checkboxes.forEach((checkbox) => {
        selectedWorkouts.push(checkbox.value);
      });

      
      document.getElementById(`display${capitalize(day)}`).innerHTML = `${capitalize(day)}'s Selected Workouts: ` + selectedWorkouts.join(', ');
      
      fetch('http://127.0.0.1:3456/workout/plan')
    .then(response => response.json() )
    .then(data => {
        a = JSON.stringify(data, null, 2);
        document.getElementById(`display${capitalize(day)}`).innerHTML += `(${a})`

    })
    .catch(err => {
      
        document.getElementById(`display${capitalize(day)}`).innerHTML += `(${err.message})`

    });





    });
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


  function generatePlan(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    document.getElementById('plan').innerHTML = `Loading...`;

    fetch('http://127.0.0.1:3456/users')
    .then(response => response.json() )
    .then(data => {
        document.getElementById('plan').innerHTML = JSON.stringify(data, null, 2);
    })
    .catch(err => {
        document.getElementById('plan').innerHTML = `Error fetching data: ${err.message}`;
    });
}




function loginUser(event) {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  // Perform login logic, e.g., send data to server for authentication
}

function signupUser(event) {
  event.preventDefault();
  let newUsername = document.getElementById("new-username").value;
  let newPassword = document.getElementById("new-password").value;
  // Perform sign-up logic, e.g., send data to server for registration
}




document.getElementById("login-form").addEventListener("submit", loginUser);
document.getElementById("signup-form").addEventListener("submit", signupUser)





"""







