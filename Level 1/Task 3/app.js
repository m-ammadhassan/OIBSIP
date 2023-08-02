let currentTempNum = document.querySelector('#user_input');

let convertButton = document.querySelector('#convert_btn');
let clearButton = document.querySelector('#clear-btn');

let resultDisplay = document.querySelector('#converted_temp_result');

let convertedTemp;

convertButton.addEventListener('click', (e)=>{
    e.preventDefault();
    let currentTempUnit = document.querySelector('input[name="temperature_unit"]:checked');
    let reuiredTempUnit = document.querySelector('select[name="temperature_required"]');

    // console.log(currentTempNum.value);
    // console.log((currentTempNum.value).length);

    // Validations
    if(isNaN(currentTempNum.value) == true || currentTempNum.value == "")
    {
        alert("Kindly enter the temperature only in number")
    }
    else if(currentTempUnit == null)
    {
        alert("Kindly select the unit of the temperature you entered")
    }
    else if(reuiredTempUnit.value == "")
    {
        alert("Kindly select the unit of required temperature")
    }
    else if((currentTempNum.value).length > 5)
    {
        alert("Temperature value cannot exceed more than 5 digits")
    }
    else if(currentTempUnit.value == reuiredTempUnit.value)
    {
        alert("Entered temperature unit and required temperature unit cannot be same")
    }

    // Converting and Displaying Data
    else
    {
        let result = convertTemp(parseInt(currentTempNum.value, 10), currentTempUnit.value, reuiredTempUnit.value);
        resultDisplay.innerHTML = `${currentTempNum.value}&deg;${currentTempUnit.value} &rarr; ${(result.convertedTemp).toFixed(2)}&deg;${result.requireUnit}`;
    }
    // console.log(currentTempUnit.value);
    // console.log(reuiredTempUnit.value);

})

const convertTemp = (currentNum, currentUnit, requireUnit) =>
{
    if(currentUnit == 'C' && requireUnit =='F') { convertedTemp = ((9/5)*currentNum)+32; }

    else if(currentUnit == 'C' && requireUnit == 'K') { convertedTemp = currentNum + 273.15; }

    else if(currentUnit == 'F' && requireUnit == 'C') { convertedTemp = (currentNum - 32)*(5/9); }

    else if(currentUnit == 'F' && requireUnit == 'K') { convertedTemp = ((currentNum - 32)*(5/9)) + 273.15; }

    else if(currentUnit == 'K' && requireUnit == 'C') { convertedTemp = currentNum - 273.15; }

    else { convertedTemp = ((currentNum - 273.15)*(9/5))+32; }

    return {convertedTemp, requireUnit};
}

clearButton.addEventListener('click', (e)=>{
    e.preventDefault();

    let currentTempUnit = document.querySelector('input[name="temperature_unit"]:checked');
    let reuiredTempUnit = document.querySelector('select[name="temperature_required"]');

    currentTempNum.value = '';
    reuiredTempUnit.value = '';
    currentTempUnit.checked = false;
    resultDisplay.innerHTML = '';

})
