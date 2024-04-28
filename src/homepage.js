export function loadHomePage() {
    const heroDiv = document.createElement('div');
    heroDiv.classList.add('hero', 'min-h-screen');
    heroDiv.style.backgroundImage = 'url(./src/images/restaurant.jpg)';

    const overlayDiv = document.createElement('div');
    overlayDiv.classList.add('hero-overlay', 'bg-opacity-40');

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('hero-content', 'text-center', 'text-neutral-content');

    const innerDiv = document.createElement('div');
    innerDiv.classList.add('max-w-md');

    const heading = document.createElement('h1');
    heading.classList.add('mb-5', 'text-6xl', 'font-bold');
    heading.textContent = 'Savoré Delights';

    const paragraph = document.createElement('p');
    paragraph.classList.add('text-secondary-content', 'mb-5');
    paragraph.textContent = 'A Haven for Epicurean Exploration and Exquisite Dining Experiences';

    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary-content');
    button.setAttribute('id', 'menu-btn2');
    button.textContent = 'Explore Our Menu';

    innerDiv.appendChild(heading);
    innerDiv.appendChild(paragraph);
    innerDiv.appendChild(button);

    contentDiv.appendChild(innerDiv);

    heroDiv.appendChild(overlayDiv);
    heroDiv.appendChild(contentDiv);

    const content = document.querySelector('#content');
    content.appendChild(heroDiv);
}