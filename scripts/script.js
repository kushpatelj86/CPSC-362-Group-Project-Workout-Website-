
function calcBMI(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;


    let bmi = Math.round(((weight / (height * height) * 703 )) * 10) / 10;

    document.getElementById("BMI-Heading").innerHTML = "Your BMI is: ";
    document.getElementById("BMI").innerHTML = bmi;


    if(bmi < 18.5)
    {
        document.getElementById("Health-Status").innerHTML = "You are Underweight";
    }
    else if (bmi >= 18.5 && bmi <= 24.9)
    {
        document.getElementById("Health-Status").innerHTML = "You are Normal Weight";
    }
    else if (bmi >= 25 && bmi <= 29.9)
    {
        document.getElementById("Health-Status").innerHTML = "You are Overweight";
    }
    else if (bmi >= 30)
    {
        document.getElementById("Health-Status").innerHTML = "You have Obesity";
    }
    else
    {
        
    }
}