import { loadHomePage } from './homepage.js';
import { loadMenuPage } from './menu.js';
import { loadAboutPage } from './about.js';
import './style.css';

loadHomePage();

const homeLink = document.querySelector('#home-btn');
homeLink.addEventListener('click', function() {
    clearContent();
    loadHomePage();
});

const menuLink = document.querySelector('#menu-btn');
menuLink.addEventListener('click', function() {
    clearContent();
    loadMenuPage();
});

const menuLink2 = document.querySelector('#menu-btn2');
menuLink2.addEventListener('click', function() {
    clearContent();
    loadMenuPage();
});

const aboutLink = document.querySelector('#about-btn');
aboutLink.addEventListener('click', function() {
    clearContent();
    loadAboutPage();
});

function clearContent() {
    const content = document.querySelector('#content');
    if (content) {
        content.innerHTML = '';
    }
}