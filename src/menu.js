export function loadMenuPage() {
    const overflowDiv = document.createElement('div');
    overflowDiv.classList.add('overflow-x-auto', 'mt-5', 'p-5', 'bg-base-200', 'rounded-box', 'bg-opacity-80');

    const table = document.createElement('table');
    table.classList.add('table');

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    const overlayDiv = document.createElement('div');
    overlayDiv.classList.add('hero-overlay', 'bg-opacity-40');

    ['', 'Dish', 'Description', 'Price'].forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);

    const tbody = document.createElement('tbody');

    const rowData = [
        { number: '1', dish: 'Classic Pasta', description: 'Al dente spaghetti with homemade marinara sauce', price: '$12.99' },
        { number: '2', dish: 'Grilled Salmon', description: 'Fresh Atlantic salmon fillet served with seasonal vegetables', price: '$16.99' },
        { number: '3', dish: 'Vegetarian Delight', description: 'Roasted vegetables and quinoa served with balsamic glaze', price: '$10.99' },
        { number: '4', dish: 'Chicken Alfredo', description: 'Grilled chicken breast served over creamy fettuccine Alfredo', price: '$14.99' },
        { number: '5', dish: 'Margherita Pizza', description: 'Fresh mozzarella, tomatoes, and basil on a thin crust', price: '$11.99' },
        { number: '6', dish: 'BBQ Ribs', description: 'Tender, slow-cooked ribs glazed with tangy barbecue sauce', price: '$18.99' },
        { number: '7', dish: 'Caprese Salad', description: 'Vine-ripened tomatoes, fresh mozzarella, and basil drizzled with balsamic reduction', price: '$8.99' },
        { number: '8', dish: 'Shrimp Scampi', description: 'Sautéed shrimp in a garlic butter sauce served over linguine', price: '$15.99' },
        { number: '9', dish: 'Beef Tenderloin', description: 'Grilled beef tenderloin with mashed potatoes and seasonal vegetables', price: '$22.99' },
        { number: '10', dish: 'Chicken Caesar Salad', description: 'Romaine lettuce, grilled chicken, croutons, and Parmesan cheese with Caesar dressing', price: '$13.99' }
    ];

    rowData.forEach((data, index) => {
        const row = document.createElement('tr');
        ['number', 'dish', 'description', 'price'].forEach(key => {
            const cell = document.createElement('td');
            cell.textContent = data[key];
            row.appendChild(cell);
        });
        if (index % 2 === 1) {
            row.classList.add('hover:bg-base-100');
        }

        tbody.appendChild(row);
    });
    
    table.appendChild(thead);
    table.appendChild(tbody);
    
    overflowDiv.appendChild(table);
    
    const container = document.createElement('div');
    container.classList.add('hero', 'min-h-screen');
    container.appendChild(overlayDiv);
    container.appendChild(overflowDiv);
    
    const content = document.querySelector('#content');
    container.style.backgroundImage = 'url(/src/menu.jpg)';
    content.appendChild(container);
}