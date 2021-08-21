//function for updating value for each type of component
function update(price, typeOfComponent) {
    const cost = document.getElementById(typeOfComponent);
    cost.innerText = price;
    totalPrice();
}

//function for updating total cost
function totalPrice() {
    const baseCost = document.getElementById("base-price").innerText;
    const memoryCost = document.getElementById("memory-price").innerText;
    const storageCost = document.getElementById("storage-price").innerText;
    const deliveryCost = document.getElementById("delivery-price").innerText;
    const totalCost = document.getElementById('total-price');
    const discountCost = document.getElementById('discount-price');
    const total = parseInt(baseCost) + parseInt(memoryCost) + parseInt(storageCost)
    + parseInt(deliveryCost);
    totalCost.innerText = total
    discountCost.innerText = total;

}

//function for applying discount
function discount() {
    const totalCost = document.getElementById('total-price');
    const discountCost = document.getElementById('discount-price');
    const couponValue = document.getElementById('coupon-input');
    if (couponValue.value.toLowerCase() == 'stevekaku') {
        const cost = parseInt(totalCost.innerText);
        discountedPrice = (cost - (cost*0.2));
        discountCost.innerText = discountedPrice;
        couponValue.value = '';
    } else {
        alert('you must use "stevekaku" as coupon!!!');
    }
}

//for colouring the selected buttons
function addRemoveClass(params) {
    if (arguments.length == 3) {
        arguments[0].classList.add("selected");
        arguments[1].classList.remove("selected");
        arguments[2].classList.remove("selected");
    }
    if (arguments.length == 2) {
        arguments[0].classList.add("selected");
        arguments[1].classList.remove("selected");
    }
}

//buttons
const btnMemory0 = document.getElementById('btn-memory-0');
const btnMemory180 = document.getElementById('btn-memory-180');
const btnStorage0 = document.getElementById('btn-storage-0');
const btnStorage100 = document.getElementById('btn-storage-100');
const btnStorage180 = document.getElementById('btn-storage-180');
const btnDelivery0 = document.getElementById('btn-delivery-0');
const btnDelivery20 = document.getElementById('btn-delivery-20');

btnMemory0.addEventListener('click', function () {
    update(0, 'memory-price');
    addRemoveClass(btnMemory0, btnMemory180);
});
btnMemory180.addEventListener('click', function () {
    update(180, 'memory-price');
    addRemoveClass(btnMemory180, btnMemory0);
});
btnStorage0.addEventListener('click', function () {
    update(0, 'storage-price');
    addRemoveClass(btnStorage0, btnStorage100, btnStorage180);
});
btnStorage100.addEventListener('click', function () {
    update(100, 'storage-price');
    addRemoveClass(btnStorage100, btnStorage0, btnStorage180);
});
btnStorage180.addEventListener('click', function () {
    update(180, 'storage-price');
    addRemoveClass(btnStorage180, btnStorage0, btnStorage100);
});
btnDelivery0.addEventListener('click', function () {
    update(0, 'delivery-price');
    addRemoveClass(btnDelivery0, btnDelivery20);
});
btnDelivery20.addEventListener('click', function () {
    update(20, 'delivery-price');
    addRemoveClass(btnDelivery20, btnDelivery0);
});
document.getElementById('coupon-apply').addEventListener('click', function () {
    discount();
});