

// 1️⃣ Mission: Grade Analyzer
let marks = 85;
if (marks % 5 === 0 && marks % 10 === 0) {
    console.log("Elite Performer");
} else if (marks >= 90) {
    console.log("Top Futuristic Student");
} else if (marks >= 70) {
    console.log("Almost There!");
} else if (marks >= 50) {
    console.log("Keep Working Hard!");
} else {
    console.log("Back to Basics!");
}

// 2️⃣ Mission: Expense Balancer
let income = 5000;
let food = 1500;
let transport = 1000;
let gadgets = 2000;
let totalExpenses = food + transport + gadgets;

if (totalExpenses > income) {
    console.log("System Warning: Bankrupt in Future!");
} else if (totalExpenses < income) {
    console.log("Future Secure!");
} else {
    console.log("Zero Savings: Future Risky!");
}

// 3️⃣ Mission: Futuristic Password Validator
let password = "Password@123";
let hasUpperCase = /[A-Z]/.test(password);
let hasLowerCase = /[a-z]/.test(password);
let hasDigit = /[0-9]/.test(password);
let hasSpecialChar = /[!@#$%^&*]/.test(password);

if (password.length < 8) {
    console.log("Password too short!");
} else if (!hasUpperCase || !hasLowerCase || !hasDigit || !hasSpecialChar) {
    console.log("Password not strong enough!");
} else {
    console.log("Password Accepted!");
}

// 4️⃣ Mission: Logical Number Sorter
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        numbers[i] = numbers[i] ** 2;
    } else {
        numbers[i] = numbers[i] ** 3;
    }
}
numbers.sort((a, b) => b - a);
console.log(numbers);

// 5️⃣ Mission: Robo-Shop Assistant
let budget = 1000;
let itemPrices = [200, 300, 150, 400];
let totalCost = 0;
for (let i = 0; i < itemPrices.length; i++) {
    totalCost += itemPrices[i];
}

if (totalCost <= budget) {
    console.log("Shopping Successful!");
} else {
    console.log("Not enough budget! Try fewer items.");
}
