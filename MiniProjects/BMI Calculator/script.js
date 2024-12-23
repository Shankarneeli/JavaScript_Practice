let form = document.querySelector("form");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;
    let result = document.querySelector("#result");

    if(height ===""|| height <0 || isNaN(height)){
        result.innerHTML = `Please enter valid Height ${height}`
    }
    else if(weight ===""|| weight <0 || isNaN(weight)){
        result.innerHTML = `Please enter valid weight ${weight}`
    }
    else {
        let Bmi = (weight / ((height*height)/10000)).toFixed(2);
        result.innerHTML = Bmi
    }


})