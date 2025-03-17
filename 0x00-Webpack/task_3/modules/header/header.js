import $ from 'jquery';
import '../header/header.css';
import logo from '/assets/holberton-logo.jpg'; // ✅ Correct path

console.log('Init header');

$(document).ready(() => {
    const header = $('<header></header>');
    const img = $('<img>', { src: logo, width: 200, height: 200, id: 'logo' });
    const h1 = $('<h1>ALX Dashboard</h1>');
    
    header.append(img, h1);
    $('body').prepend(header);
});
