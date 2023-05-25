const button = document.querySelector("#cal");
button.addEventListener('click',()=> {
    const bmiText = document.querySelector('#bmi');
    const bmiRe = document.querySelector('#bmi-re');
    const dia = document.querySelector('#dia');
    const diaRe = document.querySelector('#dia-re');
    const eva = document.querySelector('#eva');
    const evaRe = document.querySelector('#eva-re');
    const showError = document.querySelector('#small1')
    const showError2 = document.querySelector('#small2')

    const height =document.querySelector("#height").value;
    const weight = document.querySelector("#weight").value;
    let height_status = false,weight_status = false;
    if (weight === '') {
        showError.innerHTML = 'Weight Cannot be blank';
    }
    else if (isNaN(weight)) {
        showError.innerHTML = 'You must enter weight in kg only';
    }
     else if (weight <= 0 || (weight >= 635)) {
        showError.innerHTML = 'Your input must be greater than zero and less the 635';
    }
    else {
        showError.innerHTML = '';
        weight_status = true;

    }
    if (height === '') {
        showError2.innerHTML = 'Height Cannot be blank';
    }
    else if (isNaN(height)) {
        showError2.innerHTML = 'You must enter height in CM only';
    }
    else if (height <= 0 || (height >= 280)) {
        showError2.innerHTML = 'Your input must be greater than zero and less the 280';
    }

    else {
        showError2.innerHTML = '';
        height_status = true;
    }

    if (height_status && weight_status) {
        const bmi = (weight / ((height * height)/10000).toFixed(2));
        if (bmi < 18.6) {
            bmiText.innerHTML = 'Your BMI is: ';
            bmiRe.innerHTML = bmi;
            dia.innerHTML = 'Diagnosis:';
            diaRe.innerHTML = 'Under Weight';
            eva.innerHTML = 'Evaluation';
            evaRe.innerHTML = 'Major Health Risk';

        }
        else if (bmi >= 18.5 && bmi < 24.9) {
            bmiText.innerHTML = 'Your BMI is: ';
            bmiRe.innerHTML = bmi;
            dia.innerHTML = 'Diagnosis:';
            diaRe.innerHTML = 'normal';
            eva.innerHTML = 'Evaluation';
            evaRe = 'Healthy';

        }
        else if (bmi >= 25.0 && bmi < 29.9) {
            bmiText.innerHTML = 'Your BMI is: ';
            bmiRe.innerHTML = bmi;
            dia.innerHTML = 'Diagnosis:';
            diaRe.innerHTML = 'overweight';
            eva.innerHTML = 'Evaluation';
            evaRe.innerHTML = 'Major Health Risk';

        }
        else if (bmi > 30) {
            bmiText.innerHTML = 'Your BMI is: ';
            bmiRe.innerHTML = bmi;
            dia.innerHTML = 'Diagnosis:';
            diaRe.innerHTML = 'obesity';
            eva.innerHTML = 'Evaluation';
            evaRe.innerHTML = 'Major Health Risk';
        }
    }
    else{
    }


});
