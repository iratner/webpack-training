import { generateUUID } from '../../../../utilities/common-utils';
import './_blue-quill-spinner.scss';

// Templates for creating components
const blueQuillSpinnerHB = require('./_BlueQuillSpinner.hbs');

class BlueQuillSpinner {

    static sizes = {
        SMALL: 'small-spinner',
        MEDIUM: 'medium-spinner',
        LARGE: 'large-spinner'
    };

    constructor(size = BlueQuillSpinner.sizes.SMALL) {

        this.size = size;
        this.uuid = generateUUID();
        this.html = blueQuillSpinnerHB(
            {
                uuid: this.uuid,
                size: this.size
            }
        );
    }


    /**
     * Remove the spinner from the DOM completely
     */
    destroy() {
        document.querySelector('[data-uuid="' + this.uuid + '"]').remove();
    }

    /**
     * Make the spinner visible
     */
    show() {
        document.querySelector('.blue-quill-spinner[data-uuid="' + this.uuid + '"]')
            .classList.remove('hidden');
    };

    /**
     * Hide the spinner
     */
    hide() {
        document.querySelector('.blue-quill-spinner[data-uuid="' + this.uuid + '"]')
            .classList.add('hidden');
    };
}

export default BlueQuillSpinner;