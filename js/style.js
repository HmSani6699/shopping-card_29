document.getElementById('phone-plus').addEventListener('click', function () {
    let phoneQuantityValue = getInputFiled('phone-input', true);

    let totalPhonePrice = phoneQuantityValue * 1219
    setElementValue('phone-total', totalPhonePrice);
    subtotal();
    totalTex();
    totalAmount();
});

document.getElementById('phone-minus').addEventListener('click', function () {
    let phoneQuantityValue = getInputFiled('phone-input', false);
    if (isNaN(phoneQuantityValue)) {
        setElementValue('phone-total', 0)
    }
    let totalPhonePrice = phoneQuantityValue * 1219
    setElementValue('phone-total', totalPhonePrice)
    subtotal();
    totalTex();
    totalAmount();
})


document.getElementById('case-plus').addEventListener('click', function () {
    let caseQuantityValue = getInputFiled('case-input', true);

    let totalCasePrice = caseQuantityValue * 59
    setElementValue('case-total', totalCasePrice);
    subtotal();
    totalTex();
    totalAmount();
})

document.getElementById('case-minus').addEventListener('click', function () {
    let caseQuantityValue = getInputFiled('case-input', false);

    let totalCasePrice = caseQuantityValue * 59
    setElementValue('case-total', totalCasePrice);
    subtotal();
    totalTex();
    totalAmount();
})
