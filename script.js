

const calculatePrice = (price, quantity) =>  price * quantity;

const getTax = (basePrice, taxRate) =>  basePrice * taxRate;


console.log("price before tax: $" + calculatePrice(15, 4));
console.log("price after tax: $" + (calculatePrice(15, 4) + getTax(calculatePrice(15, 4), 0.07)));


function calculateStoreTax(amount){
    const defaultTaxRate = 0.07;
    return getTax(amount, defaultTaxRate);
}

console.log(calculateStoreTax(100));
//console.log(defaultTaxRate);