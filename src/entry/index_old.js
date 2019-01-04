import _ from 'lodash';
import './css/style.css';
import icon from './img/icon.svg';


function component() {

    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    let myIcon = new Image();
    myIcon.src = icon;

    element.appendChild(myIcon);

    return element;
}

function imageComponent() {
    let otherElement = document.createElement('div');
    otherElement.innerHTML = " ";
    otherElement.classList.add('image');

    return otherElement;
}

document.body.appendChild(component());
document.body.appendChild(imageComponent());