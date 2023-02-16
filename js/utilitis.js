function getInputFiled(id, check) {
    const inputFiled = document.getElementById(id);
    let inputFiledValueString = inputFiled.value;
    let inputValue = parseInt(inputFiledValueString);

    let newInputValue;
    if (check) {
        newInputValue = inputValue += 1;
    }
    else {
        newInputValue = inputValue -= 1;
    }
    if (newInputValue < 0) {
        return alert('no')
    }
    inputFiled.value = newInputValue;
    return newInputValue;
}

function setElementValue(id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
}

function getElementValue(id) {
    const element = document.getElementById(id);
    const elementValueString = element.innerText;
    const elementValue = parseInt(elementValueString)
    return elementValue
}


function subtotal() {
    const phonePrice = getElementValue('phone-total');
    const casePrice = getElementValue('case-total');

    const subtotalValue = phonePrice + casePrice;
    setElementValue('sub-total', subtotalValue);

    return subtotalValue

}
function totalTex() {
    let suvTotalValue = subtotal();
    let totalTex = suvTotalValue * 0.1;
    let totalTexValue = totalTex.toFixed(1);
    setElementValue('tex-total', totalTexValue);

    return totalTexValue
}

function totalAmount() {
    const subtotalValue = subtotal();
    const totalTexValue = totalTex();

    let total = parseFloat(subtotalValue) + parseFloat(totalTexValue);
    setElementValue('price-total', total)
}