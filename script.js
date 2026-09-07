function calculatePrice(price, quantity){
    return price * quantity;
}

const getTax = function(amount, taxRate) {
    return amount * taxRate;
};


console.log("price before tax: $" + calculatePrice(15, 4));
console.log("price after tax: $" + (calculatePrice(15, 4) + getTax(calculatePrice(15, 4), 0.07)));