// Simple example to enhance functionality (like form submission handling or toggling menus)
document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is working for Tafrija NGO website.");
    // You can add further JavaScript logic here for additional functionality
});
document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is working for Tafrija NGO website.");
    
    const items = [
        "Canned Food (e.g., vegetables, fruits, soups)",
        "Clothing (new or gently used)",
        "Bedding and Towels",
        "Baby Supplies (diapers, formula, etc.)",
        "Personal Hygiene Products (soap, shampoo, toothpaste)",
        "Non-perishable Food Items",
        "School Supplies (books, pencils, backpacks)",
        "Household Goods (utensils, pots, pans)"
    ];

    const itemListContainer = document.getElementById('item-list');

    items.forEach(item => {
        const listItem = document.createElement('div');
        listItem.className = 'item';
        listItem.textContent = item;
        itemListContainer.appendChild(listItem);
    });
});
