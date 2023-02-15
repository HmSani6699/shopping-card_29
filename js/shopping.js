// increment the input value
function setInputPlusValue(id, num) {
    const phoneInputFiled = document.getElementById(id + 'input');
    const phoneInputFiledValueString = phoneInputFiled.value;
    let phoneInputValue = parseInt(phoneInputFiledValueString);
    phoneInputFiled.value = phoneInputValue += 1;
    const newElementValue = phoneInputFiled.value * num;
    setElementValue(id, newElementValue)
}

// decrement the input value
function setInputMinusValue(id, num) {
    const phoneInputFiled = document.getElementById(id + 'input');
    const phoneInputFiledValueString = phoneInputFiled.value;
    let phoneInputValue = parseInt(phoneInputFiledValueString);
    let newInputValue = phoneInputValue -= 1;
    if (newInputValue >= 0) {
        phoneInputFiled.value = newInputValue;
        let totalCost = phoneInputFiled.value * num
        setElementValue(id, totalCost)
    }
    else {
        alert('please provide the positive number')
    }
}

// set the new balance 
function setElementValue(id, value) {
    document.getElementById(id + 'total').innerText = value
}

//get the element
function getElementValue(id) {
    const totalPhonePrice = document.getElementById(id).innerText;
    return totalPhonePrice
}


//phone part
document.getElementById('phone-plus').addEventListener('click', function () {
    setInputPlusValue('phone-', 1219);
    subTotal()
});

document.getElementById('phone-minus').addEventListener('click', function () {
    setInputMinusValue('phone-', 1219);
    subTotal()
})

//case part

document.getElementById('case-plus').addEventListener('click', function () {
    setInputPlusValue('case-', 59);
    subTotal()
})

document.getElementById('case-minus').addEventListener('click', function () {
    setInputMinusValue('case-', 59);
    subTotal()
});


//subtotal
function subTotal() {
    const totalPhonePrice = getElementValue('phone-total');
    const totalCasePrice = getElementValue('case-total');
    let subTotal = parseInt(totalPhonePrice) + parseInt(totalCasePrice);
    setElementValue('sub-', subTotal);

    let totalTex = subTotal * 0.1;
    let totalTexNumber = parseFloat(totalTex.toFixed(1));
    setElementValue('tex-', totalTexNumber);

    let total = subTotal + totalTexNumber;
    setElementValue('price-', total);
}