import { generateUUID } from '../../utilities/common-utils';

// Templates for creating components
const blueQuillSpinnerTP = require('../templates/_BlueQuillSpinner.hbs');

export class BlueQuillSpinner {
    size = {
        SMALL: 'small-spinner',
        MEDIUM: 'medium-spinner',
        LARGE: 'large-spinner'
    };

    constructor(fixed = 'spinner-fixed', size = this.size.MEDIUM) {
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
    }

    destroy() {
        $('.blue-quill-spinner[data-uuid="' + uuid + '"]').remove();
    };

    show() {
        $('.blue-quill-spinner[data-uuid="' + uuid + '"]').removeClass('hidden');
    };

    hide() {
        $('.blue-quill-spinner[data-uuid="' + uuid + '"]').addClass('hidden');
    };
}
//
// return {
//
//         // A reusable blue-quill spinner component which can be sized and destroyed when no longer needed
//         BlueQuillSpinnerSizes: _self.constants.BlueQuillSpinner.size,
//
//         /**
//          * Returns a loading component that's centered in the middle of any element you append it to.
//          * Get the actual html by referencing the html prop of the component.  Also returns destroy(), show(),
//          * and hide()
//          * @param fixed
//          * @param size
//          * @returns {{html: *, show: show, hide: hide, destroy: destroy}}
//          * @constructor
//          */
//         BlueQuillSpinner : function(fixed, size) {
//
//
//             if (!fixed) fixed = '';
//             else fixed = 'spinner-fixed';
//
//             if (!size) size = _self.constants.BlueQuillSpinner.size.MEDIUM;
//
//             var uuid = generateUUID();
//             var html = Handlebars.partials[_self.templates.BlueQuillSpinner](
//                 {
//                     uuid: uuid,
//                     fixed: fixed,
//                     size: size
//                 }
//             );
//
//             var destroy = function() {
//                 $('.blue-quill-spinner[data-uuid="' + uuid + '"]').remove();
//             };
//
//             var show = function() {
//                 $('.blue-quill-spinner[data-uuid="' + uuid + '"]').removeClass('hidden');
//             };
//
//             var hide = function() {
//                 $('.blue-quill-spinner[data-uuid="' + uuid + '"]').addClass('hidden');
//             };
//
//             return {
//                 html: html,
//                 show: show,
//                 hide: hide,
//                 destroy: destroy
//             }
//         },
//
//         BlueQuillBlanketWithCenteredContent: function(content, width, height, $parent, isDarkened, fadeIn) {
//             var uuid = generateUUID();
//
//             var blanketClasses = "";
//             var contentClasses = "";
//
//             if (isDarkened) blanketClasses = "darken-background";
//
//             if (fadeIn) contentClasses = 'blanket-fade-in';
//
//             var $element = $(Handlebars.partials[_self.templates.BlueQuillBlanketWithCenteredContent]({
//                 width: width, height: height, content: content, uuid: uuid,
//                 blanketClasses: blanketClasses, contentClasses: contentClasses
//             }));
//
//             if ($parent) {
//                 $parent.append($element);
//             } else {
//                 $(body).append($element);
//             }
//
//             // Append the close button and bind it to remove the blanket and contents from the dom
//             $element.find('.centered-content')
//                 .append('<span class="blue-quill-blanket-with-centered-content-close"></span>');
//
//             $($element.find('.blue-quill-blanket-with-centered-content-close')).on('click', function() {
//                 $(this).closest('.blue-quill-blanket-with-centered-content').remove();
//             });
//         }
//     }
// })();