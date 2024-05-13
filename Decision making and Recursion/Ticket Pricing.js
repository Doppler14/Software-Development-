function calculateTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

// Example usage
let age = parseInt(prompt("Enter your age:"));
let price = calculateTicketPrice(age);
console.log(`Ticket price for age ${age} is $${price}`);
