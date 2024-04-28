import { loadHomePage } from './homepage.js';
import { loadMenuPage } from './menu.js';
import './style.css';

loadHomePage();

const homeLink = document.querySelector('#home-btn');
homeLink.addEventListener('click', function() {
    clearContent();
    loadHomePage();
});

const menuLink = document.querySelector('#menu-btn');
const menuLink2 = document.querySelector('#menu-btn2');

menuLink2.addEventListener('click', function() {
    clearContent();
    loadMenuPage();
});

menuLink.addEventListener('click', function() {
    clearContent();
    loadMenuPage();
});

function clearContent() {
    const content = document.querySelector('#content');
    if (content) {
        content.innerHTML = '';
    }
}