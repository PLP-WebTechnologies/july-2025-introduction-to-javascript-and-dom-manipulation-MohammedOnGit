/*****************************
 * PART 1: BASIC JAVASCRIPT *
 *****************************/

// Variable declarations
const userAgeInput = document.getElementById('userAge');
const ageResult = document.getElementById('ageResult');

// Conditional example
function checkAge() {
    const age = parseInt(userAgeInput.value);
    
    if (isNaN(age)) {
        ageResult.textContent = "Please enter a valid number";
        ageResult.style.color = "red";
    } else if (age >= 18) {
        ageResult.textContent = "You are eligible!";
        ageResult.style.color = "green";
    } else {
        ageResult.textContent = "Sorry, you're too young";
        ageResult.style.color = "orange";
    }
}

/*************************
 * PART 2: FUNCTIONS *
 *************************/

// Function 1: Calculate total with tax
function calculateTotal() {
    const items = [
        { name: "Shirt", price: 25.99 },
        { name: "Jeans", price: 49.99 },
        { name: "Shoes", price: 79.99 }
    ];
    
    const taxRate = 0.08;
    let subtotal = 0;
    
    // Calculate subtotal
    items.forEach(item => {
        subtotal += item.price;
    });
    
    // Calculate total with tax
    const total = subtotal * (1 + taxRate);
    
    // Display results
    const resultsDiv = document.getElementById('functionResults');
    resultsDiv.innerHTML = `
        <p>Subtotal: $${subtotal.toFixed(2)}</p>
        <p>Tax (8%): $${(subtotal * taxRate).toFixed(2)}</p>
        <p><strong>Total: $${total.toFixed(2)}</strong></p>
    `;
}

// Function 2: Format name
function formatName() {
    const firstName = "john";
    const lastName = "doe";
    
    // Capitalize first letters
    const formattedName = `${firstName.charAt(0).toUpperCase()}${firstName.slice(1)} ${lastName.charAt(0).toUpperCase()}${lastName.slice(1)}`;
    
    const resultsDiv = document.getElementById('functionResults');
    resultsDiv.innerHTML = `<p>Formatted Name: <strong>${formattedName}</strong></p>`;
}

/*********************
 * PART 3: LOOPS *
 *********************/

// Loop 1: Print numbers 1-10
function printNumbers() {
    let output = "";
    for (let i = 1; i <= 10; i++) {
        output += i + (i < 10 ? ", " : "");
    }
    
    const loopResults = document.getElementById('loopResults');
    loopResults.innerHTML = `<p>Numbers 1-10: ${output}</p>`;
}

// Loop 2: Create shopping list
function createList() {
    const groceries = ["Apples", "Milk", "Bread", "Eggs", "Cheese"];
    let listHTML = "<ul>";
    
    // Using forEach loop
    groceries.forEach(item => {
        listHTML += `<li>${item}</li>`;
    });
    
    listHTML += "</ul>";
    
    const loopResults = document.getElementById('loopResults');
    loopResults.innerHTML = `<p>Shopping List:</p>${listHTML}`;
}

/***************************
 * PART 4: DOM MANIPULATION *
 ***************************/

// DOM Interaction 1: Change background color
document.getElementById('colorChanger').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') 
        ? "Light Mode" 
        : "Dark Mode";
});

// DOM Interaction 2: Toggle text style
document.getElementById('textToggler').addEventListener('click', function() {
    const textElement = document.querySelector('.toggle-text');
    textElement.classList.toggle('highlight');
    
    // Change text content based on current state
    if (textElement.classList.contains('highlight')) {
        textElement.textContent = "Text is now highlighted!";
    } else {
        textElement.textContent = "This text will change";
    }
});

// DOM Interaction 3: Add new items dynamically
document.getElementById('adder').addEventListener('click', function() {
    const itemList = document.getElementById('itemList');
    const newItem = document.createElement('li');
    const itemNumber = itemList.children.length + 1;
    newItem.textContent = `New Item ${itemNumber}`;
    itemList.appendChild(newItem);
});

// Bonus: Initialize with some items
window.onload = function() {
    const itemList = document.getElementById('itemList');
    for (let i = 1; i <= 3; i++) {
        const item = document.createElement('li');
        item.textContent = `Initial Item ${i}`;
        itemList.appendChild(item);
    }
};