import $ from 'jquery';
import _ from 'lodash';
import '../body/body.css';

console.log('Init body');

// Add elements
const body = $('<main></main>');
body.append('<p>Dashboard data for the students</p>');
const button = $('<button>Click here to get started</button>');
const counterText = $('<p id="count"></p>');

body.append(button);
body.append(counterText);
$('body').append(body);

// Counter function
let count = 0;
const updateCounter = _.debounce(() => {
    count++;
    $('#count').text(`${count} clicks on the button`);
}, 500);

button.on('click', updateCounter);
