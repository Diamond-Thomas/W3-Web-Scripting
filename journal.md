### Journal Prompt: Explain the syntax difference between the function declaration (calculatePrice) and the function expression (getTax).
the only difference between the function decleration and the function expression is the fact that the expression ios put in a variable so it has a 'const (variable name) =' and a semicolon at the end because it is part of a variable statment.

### Journal Prompt: What happened when you tried to log defaultTaxRate outside the function? Why did that occur?
when I tried to log defaultTaxRate outside the function the console ran an error. This happened because defaultTaxRate is a variable exclusive to the calculateStoreTax function so it is only accessable within that function.

### Journal Prompt: Describe how arrow function syntax differs from standard function expressions. Did concise implicit returns make your code easier or harder to read?

Arrow function syntax differs from standard function expressions because it doesnt have a return statment nor does it have the curly brackets. It also takes out the function key word and used a function expression along with using a fat arrow. Impicit return made it harder for me to read it as a function instead of a varible because it looks similar to one aside from a few minor changes.

### Journal Prompt: Why is applyDiscount considered a “Higher-Order Function”? What role did studentDiscount and seniorDiscount play? What function would you have to write if you wanted to apply no discount?

applyDiscount is considered a “Higher-Order Function” because it takes another function as an arguement. THey were the arguements passed into applyDiscount to decide what percent to calculate the total to. If I wanted to apply no discount I would write a function that just returns the total as it is without multiplying it by anything.

### Journal Prompt: How did breaking the order process into small, single-purpose functions make writing calculateFinalBill easier than putting all the math into one long block of code?
Breaking it down into small functions made it easier for me to read and understand what the math was doing along with making it easer to reuse the code with different numbers.