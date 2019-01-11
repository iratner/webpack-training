import _ from 'lodash';
import printMe from './print.js';

import './sass/style.scss';
import {BlueQuillSpinner} from "../components/js/bq_Components";

let hbsButton = require('./handlebars/_button.hbs');

function component() {

    let element = document.createElement('div');
    let btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    btn.classList.add('blue-text', 'hello');

    element.appendChild(btn);

    let anotherBtn = document.createElement('span');
    anotherBtn.innerHTML = hbsButton({text : "Hey there!"});

    element.appendChild(anotherBtn);
    console.log(hbsButton());

    return element;

    console.log("This is coming from index.js");
}

document.body.appendChild(component());
document.body.appendChild(BlueQuillSpinner());