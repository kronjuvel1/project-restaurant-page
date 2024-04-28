export function loadMenuPage() {
    const createMenuItemCard = (number, dish, description, price) => {
        const card = document.createElement('div');
        card.classList.add('card', 'w-84', 'bg-base-100/90');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h2');
        title.classList.add('card-title');
        title.textContent = dish;

        const desc = document.createElement('p');
        desc.textContent = description;

        const priceBadge = document.createElement('span');
        priceBadge.classList.add('badge', 'bg-neutral-content', 'font-semibold', 'text-primary-content');
        priceBadge.textContent = price;

        const addToCartButton = document.createElement('button');
        addToCartButton.classList.add('btn', 'btn-outline');
        addToCartButton.textContent = 'Order';

        const cardActions = document.createElement('div');
        cardActions.classList.add('card-actions', 'justify-between');
        cardActions.appendChild(priceBadge);
        cardActions.appendChild(addToCartButton);

        const imgContainer = document.createElement('figure');
        imgContainer.classList.add('outline', 'outline-2', 'hover:outline-dashed');
        const img = document.createElement('img');
        img.src = `./src/images/${dish.toLowerCase()}.webp`;
        img.alt = dish;
        img.classList.add('w-full', 'h-48', 'object-cover', 'sepia-[.20]');
        img.setAttribute('loading', 'lazy');
        imgContainer.appendChild(img);

        cardBody.appendChild(imgContainer);
        cardBody.appendChild(title);
        cardBody.appendChild(desc);
        cardBody.appendChild(cardActions);

        card.appendChild(cardBody);

        return card;
    };

    const appendMenuItemsToContainer = (container) => {
        const menuItems = [
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

        const cardContainer = document.createElement('div');
        cardContainer.classList.add('grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-4', 'gap-4', 'p-8', 'bg-orange-200');

        menuItems.forEach(menuItem => {
            const card = createMenuItemCard(menuItem.number, menuItem.dish, menuItem.description, menuItem.price);
            cardContainer.appendChild(card);
        });

        container.appendChild(cardContainer);
    };

    const overlayDiv = document.createElement('div');
    overlayDiv.classList.add('hero-overlay', 'bg-opacity-40');

    const container = document.createElement('div');
    container.classList.add('hero', 'min-h-screen');
    container.appendChild(overlayDiv);

    const content = document.querySelector('#content');
    content.appendChild(container);

    appendMenuItemsToContainer(container);
}  