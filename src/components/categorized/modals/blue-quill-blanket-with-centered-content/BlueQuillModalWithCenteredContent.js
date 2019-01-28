import { generateUUID } from '../../../../utilities/common-utils';
import "./_blue-quill-blanket-with-centered-content.scss";
const template = require('./_BlueQuillBlanketWithCenteredContent.hbs');

export default class BlueQuillModalWithCenteredContent {
    constructor(content, width, height, parentSelector, isDarkened, fadeIn) {
        this.blanketClasses = isDarkened
            ? 'darken-background'
            : '';

        this.contentClasses = fadeIn
            ? 'blanket-fade-in'
            : '';

        this.uuid = generateUUID();
        this.html = template({
            width : width,
            height: height,
            content: content,
            uuid: this.uuid,
            blanketClasses: this.blanketClasses,
            contentClasses: this.contentClasses
        });
    }

    destroy() {
        document.querySelector('.blue-quill-blanket-with-centered-content-close[data-uuid="' + this.uuid + '"]').remove();
    }
}




