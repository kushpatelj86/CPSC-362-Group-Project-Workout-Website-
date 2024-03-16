
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