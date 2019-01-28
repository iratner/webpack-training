import '../main-app/sass/_normalize.scss';
import '../components/sass/_component-style.scss'
import { Composer } from "../main-app/index";

function initializePage() {
    let composer = new Composer();
    composer.makePage();
}

initializePage();