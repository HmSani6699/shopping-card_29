// increment the input value
function setInputPlusValue(id, num, value) {
    const phoneInputFiled = document.getElementById(id + 'input');
    const phoneInputFiledValueString = phoneInputFiled.value;
    let phoneInputValue = parseInt(phoneInputFiledValueString);

    if (value == 'plus') {
        phoneInputFiled.value = phoneInputValue += 1;
        const newElementValue = phoneInputFiled.value * num;
        setElementValue(id, newElementValue)
    }
    else {
        if (phoneInputFiled.value > 0) {
            let newValue = phoneInputValue -= 1;
            phoneInputFiled.value = newValue
            let totalCost = phoneInputFiled.value * num
            setElementValue(id, totalCost)

        }
        else {
            alert('please provide the positive number')
        }

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
    setInputPlusValue('phone-', 1219, 'plus');
    subTotal()
});

document.getElementById('phone-minus').addEventListener('click', function () {
    setInputPlusValue('phone-', 1219);
    subTotal()
})

//case part

document.getElementById('case-plus').addEventListener('click', function () {
    setInputPlusValue('case-', 59, 'plus');
    subTotal()
})

document.getElementById('case-minus').addEventListener('click', function () {
    setInputPlusValue('case-', 59);
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