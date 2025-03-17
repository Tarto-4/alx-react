import $ from 'jquery';
import '../footer/footer.css';

console.log('Init footer');

const footer = $('<footer></footer>');
footer.append('<p>Copyright - ALX</p>');
$('body').append(footer);
