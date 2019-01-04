import _ from 'lodash';
import printMe from './print.js';

import './scss/style.scss';

let hbsButton = require('./handlebars/_button.hbs');

function component() {

    let element = document.createElement('div');
    let btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    btn.classList.add('blue-text', 'hello');

    element.appendChild(btn);
    console.log(hbsButton());

    return element;

    console.log("This is coming from index.js");
}

document.body.appendChild(component());