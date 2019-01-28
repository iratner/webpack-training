import { BlueQuillSpinner, BlueQuillModalWithCenteredContent } from "../../components";
import { ComponentMaker } from "../";
import '../sass/main-app.scss';

const _header = require('../templates/header.hbs');
const _component = require('../templates/component.hbs');

export default class Composer {

    makePage() {
        document.body.appendChild(this.page);
        this.page.appendChild(this.header);
        this.page.appendChild(this.content);
        this.page.appendChild(this.sidebar);
        this.page.appendChild(this.footer);

        this.header.innerHTML = _header();

        this.makeComponents();
    }

    constructor() {
        this.componentMaker = new ComponentMaker();

        this.page = document.createElement('div');
        this.content = document.createElement('div');
        this.sidebar = document.createElement('div');
        this.header = document.createElement('div');
        this.footer = document.createElement('div');

        this.page.id = 'main';
        this.content.id = 'main-content';
        this.sidebar.id = 'main-sidebar';
        this.header.id = 'main-header';
        this.footer.id = 'main-footer';
    }

    makeComponents() {
        const spinnerPack = this.makeBlueQuillSpinner();
        const modalPack = this.makeBlueQuillModalWithCenteredContent();
        this.addComponentToSidebar(spinnerPack);
        this.addComponentToSidebar(modalPack);

        // this.addComponentToSidebar(modalPack);
    }

    addComponentToSidebar(component) {

        let selector = document.createElement('span');
        selector.classList.add('component-selector');


        selector.setAttribute('data-selector-name', component.dataSelector);
        selector.innerHTML = component.name;

        this.sidebar.appendChild(selector);
        this.addComponentToPage(component);
        // selector.addEventListener('click', )
    }

    addComponentToPage(component) {
        const componentHtml = _component({name: component.name, types: component.types});

        let componentWrapper = document.createElement('div');
        componentWrapper.setAttribute('data-component-selector', component.dataSelector);
        componentWrapper.innerHTML = componentHtml;

        this.content.appendChild(componentWrapper);
    }

    makeBlueQuillSpinner() {
        const small = new BlueQuillSpinner(BlueQuillSpinner.sizes.SMALL);
        const medium = new BlueQuillSpinner(BlueQuillSpinner.sizes.MEDIUM);
        const large = new BlueQuillSpinner(BlueQuillSpinner.sizes.LARGE);

        return {
            types: [
                {
                    type: 'small',
                    component: small,
                },
                {
                    type: 'medium',
                    component: medium,
                },
                {
                    type: 'large',
                    component: large,
                }
            ],
            name: 'Blue Quill Spinner',
            className: 'BlueQuillSpinner',
            dataSelector: 'blue-quill-spinner'
        }
    };

    makeBlueQuillModalWithCenteredContent() {

        const modal = new BlueQuillModalWithCenteredContent("Some content", '150px', '150px', null, true, false);

        return {
            types: [
                {
                    type: '',
                    component: modal,
                }
            ],
            name: 'Blue Quill Modal With Centered Content',
            className: 'BlueQuillModalWithCenteredContent',
            dataSelector: 'blue-quill-modal-wth-centered-content'
        }
    };

}