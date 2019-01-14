import { generateUUID } from '../../../utilities/common-utils';

// Templates for creating components
const blueQuillSpinnerTP = require('../templates/_BlueQuillSpinner.hbs');
import '../sass/_spinners.scss';

class BlueQuillSpinner {
    static sizes = {
        SMALL: 'small-spinner',
        MEDIUM: 'medium-spinner',
        LARGE: 'large-spinner'
    };

    constructor(fixed = 'spinner-fixed', size = BlueQuillSpinner.sizes.MEDIUM) {
        this.fixed = fixed;
        this.size = size;
        this.uuid = generateUUID();
        this.html = blueQuillSpinnerTP(
            {
                uuid: this.uuid,
                fixed: this.fixed,
                size: this.size
            }
        );

        console.log("BlueQuillSpinner");
    }

    destroy() {
        document.querySelector('[data-uuid="' + this.uuid + '"]').remove();
    };

    show() {
        document.querySelector('.blue-quill-spinner[data-uuid="' + this.uuid + '"]')
            .classList.remove('hidden');
    };

    hide() {
        document.querySelector('.blue-quill-spinner[data-uuid="' + this.uuid + '"]')
            .classList.add('hidden');
    };
}

export default BlueQuillSpinner;