function bmi() {
    let w = document.getElementById("weight").value;
    let h = document.getElementById("height").value;
    let bmi = (w / (h * h / 10000)).toFixed(1);
    document.getElementById("bmi").innerHTML = "Your BMI is: " + bmi;
};
