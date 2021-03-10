import menu from '../menu.json';
import handlebars from '../templates/menu.hbs';


const menuList = document.querySelector('.menu');

// const markup = handlebars(menu);
const markup = menu.reduce((str, item) => str + handlebars(item), '');

menuList.insertAdjacentHTML('beforeend', markup);