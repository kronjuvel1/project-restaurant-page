export function loadAboutPage() {
    const heroDiv = document.createElement('div');
    heroDiv.classList.add('hero', 'min-h-screen');
    heroDiv.style.backgroundImage = 'url(./src/images/menu.jpg)';

    const overlayDiv = document.createElement('div');
    overlayDiv.classList.add('hero-overlay', 'bg-opacity-40');

    const innerHeroDiv = document.createElement('div');
    innerHeroDiv.classList.add('hero-content', 'flex-col', 'justify-center', 'items-center', 'text-white', 'text-bold', 'lg:justify-between', 'lg:items-center', 'min-h-screen');

    const textContentDiv = document.createElement('div');
    textContentDiv.classList.add('text-center', 'text-neutral-content', 'p-8', 'bg-base-100/80', 'rounded-lg', 'shadow-2xl', 'max-w-prose');

    const heading = document.createElement('h1');
    heading.classList.add('text-6xl', 'font-bold', 'mb-5', 'text-neutral-content', 'text-center');
    heading.textContent = 'Our Story';

    const paragraph = document.createElement('p');
    paragraph.classList.add('py-6', 'text-lg', 'text-white', 'font-semibold', 'text-center', 'max-w-prose');
    paragraph.textContent = `Savoré Delights is a culinary sanctuary founded by chefs Alessandro, Mei-Ling, and Javier. Inspired by their diverse backgrounds in Italian, Southeast Asian, and Latin American cuisine, they created a dining experience that celebrates the fusion of flavors and cultures. 
    At Savoré Delights, every dish is a tribute to the artisans and farmers who nurture our ingredients, inviting guests to embark on a journey of taste and tradition. Join us and savor the joy of shared experiences, where every meal is a celebration of life's delicious moments.`;

    const divider = document.createElement('div');
    divider.classList.add('divider', 'divider-2');

    textContentDiv.appendChild(heading);
    textContentDiv.appendChild(paragraph);

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'shrink-0', 'w-full', 'max-w-sm', 'shadow-2xl', 'bg-base-100/90');

    const form = document.createElement('form');
    form.classList.add('card-body');

    const formHeading = document.createElement('h1');
    formHeading.textContent = 'Contact Us';
    formHeading.classList.add('text-2xl', 'font-bold', 'mb-4', 'text-center', 'text-neutral-content');

    const emailDiv = document.createElement('div');
    emailDiv.classList.add('form-control');
    const emailLabel = document.createElement('label');
    emailLabel.classList.add('label');
    emailLabel.textContent = 'Email';
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('placeholder', 'johndoe@gmail.com');
    emailInput.classList.add('input', 'input-bordered');
    emailInput.setAttribute('required', '');

    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput);

    const bioDiv = document.createElement('div');
    bioDiv.classList.add('form-control');

    const bioLabel = document.createElement('div');
    bioLabel.classList.add('label');
    bioLabel.textContent = 'Message';

    const bioTextarea = document.createElement('textarea');
    bioTextarea.classList.add('textarea', 'textarea-bordered', 'textarea-md');
    bioTextarea.setAttribute('placeholder', 'Enter your message here');

    bioDiv.appendChild(bioLabel);
    bioDiv.appendChild(bioTextarea);

    const submitButton = document.createElement('button');
    submitButton.classList.add('btn', 'btn-neutral-content');
    submitButton.textContent = 'Submit';

    form.appendChild(formHeading);
    form.appendChild(emailDiv);
    form.appendChild(bioDiv);
    form.appendChild(submitButton);

    cardDiv.appendChild(form);

    innerHeroDiv.appendChild(textContentDiv);
    innerHeroDiv.appendChild(divider);
    innerHeroDiv.appendChild(cardDiv);

    heroDiv.appendChild(overlayDiv);
    heroDiv.appendChild(innerHeroDiv);

    const content = document.querySelector('#content');
    content.appendChild(heroDiv);
}