"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFileInput = function (elm) {
    var ty = elm.getAttribute('type');
    return elm.tagName.toLowerCase() === 'input' && ty && ty.toLowerCase() === 'file';
};
var initialTouchStartY = 0;
var initialTouchStartX = 0;
exports.detectSwipe = function (evt) {
    var touches = evt.changedTouches || (evt.originalEvent && evt.originalEvent.changedTouches);
    if (touches) {
        if (evt.type === 'touchstart') {
            initialTouchStartX = touches[0].clientX;
            initialTouchStartY = touches[0].clientY;
            return true;
        }
        else {
            if (evt.type === 'touchend') {
                var currentX = touches[0].clientX;
                var currentY = touches[0].clientY;
                if ((Math.abs(currentX - initialTouchStartX) > 20) ||
                    (Math.abs(currentY - initialTouchStartY) > 20)) {
                    evt.stopPropagation();
                    evt.preventDefault();
                    return false;
                }
            }
            return true;
        }
    }
    return false;
};
exports.createInvisibleFileInputWrap = function () {
    var fileElem = exports.createFileInput();
    var label = document.createElement('label');
    label.innerHTML = 'upload';
    label.style.visibility = 'hidden';
    label.style.position = 'absolute';
    label.style.overflow = 'hidden';
    label.style.width = '0px';
    label.style.height = '0px';
    label.style.border = 'none';
    label.style.margin = '0px';
    label.style.padding = '0px';
    label.setAttribute('tabindex', '-1');
    label.appendChild(fileElem);
    return label;
};
exports.createFileInput = function () {
    var fileElem = document.createElement('input');
    fileElem.type = "file";
    return fileElem;
};
