
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
      

      var form = document.getElementById('weeklyWorkoutForm');
      var formData = new FormData(form);

     var jsonData = {};
     formData.forEach((value,key) =>{
        if(!jsonData[key]){
        jsonData[key] = [];
      }
      jsonData[key].push(value);

     });

     document.getElementById(`display${capitalize(day)}`).innerHTML += `(${JSON.stringify(jsonData)})`




    /*fetch('http://127.0.0.1/5000/generate_workout_plan', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
    })
        .then(response => response.json())
        .then(data => {
        // Handle the response data here, such as displaying the generated workout plan
        console.log(data);
        })
        .catch(error => {
        // Handle any errors that occur during the fetch request
        console.error('Error:', error);
        });





      fetch('http://127.0.0.1:5000/get_workout_plan')
    .then(response => response.json() )
    .then(data => {
        a = JSON.stringify(data, null, 2);
        document.getElementById(`display${capitalize(day)}`).innerHTML += `(${a})`

    })
    .catch(err => {
      
        document.getElementById(`display${capitalize(day)}`).innerHTML += `(${err.message})`

    });*/





    });
  }
