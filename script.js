

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


function applyDiscount(total , discountCallback) {
  return discountCallback(total);
}

function studentDiscount(total) {
  return total * 0.90;
}

function seniorDiscount(total) {
  return total * 0.80;
}

console.log(applyDiscount(100, studentDiscount));
console.log(applyDiscount(100, seniorDiscount));
