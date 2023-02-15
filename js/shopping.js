// increment the input value
function setInputPlusValue(id) {
    const phoneInputFiled = document.getElementById(id);
    const phoneInputFiledValueString = phoneInputFiled.value;
    let phoneInputValue = parseInt(phoneInputFiledValueString);
    phoneInputFiled.value = phoneInputValue += 1;
    const newElementValue = phoneInputFiled.value * 1219;
    setElementValue(newElementValue)
}

// decrement the input value
function setInputMinusValue(id) {
    const phoneInputFiled = document.getElementById(id);
    const phoneInputFiledValueString = phoneInputFiled.value;
    let phoneInputValue = parseInt(phoneInputFiledValueString);
    let newInputValue = phoneInputValue -= 1;
    if (newInputValue > 0) {
        phoneInputFiled.value = newInputValue;
        let totalCost = phoneInputFiled.value * 1219
        setElementValue(totalCost)
    }
    else {
        alert('please provide the positive number')
    }
}

// set the new balance 
function setElementValue(value) {
    document.getElementById('phone-total').innerText = value
}

document.getElementById('phone-plus').addEventListener('click', function () {
    setInputPlusValue('phone-input');
});

document.getElementById('phone-minus').addEventListener('click', function () {
    setInputMinusValue('phone-input')
})