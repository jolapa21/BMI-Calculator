const form = document.getElementById("bmi-form");

form.addEventListener("submit", function(event) {
  
  event.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  const bmi = weight / (height / 100) **2;

  const result = document.getElementById("result");

  if (bmi <18.5) {
    result.innerHTML = `BMI Kamu adalah ${bmi.toFixed(1)} yang berarti "Underweight"`;
} else if (bmi >=18.5 && bmi <=24.9) {
    result.innerHTML = `BMI Kamu adalah ${bmi.toFixed(1)} yang berarti "Normal weight"`;
} else if (bmi >=25 && bmi <=29.9) {
    result.innerHTML = `BMI Kamu adalah ${bmi.toFixed(1)} yang berarti "Overweight"`;
} else if (bmi >=30) {
    result.innerHTML = `BMI Kamu adalah ${bmi.toFixed(1)} yang berarti "Obesity"`;
}
});
