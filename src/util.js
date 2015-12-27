const win = window;
const doc = win.document;

export function wrap() {
    var html = this;
    var temp = document.createElement('div');
    temp.innerHTML = html;
    return temp;
}

export function find(selector) {
    var el = this;
    return el.querySelector(selector);
}

export function findAll(selector) {
    var el = this;
    return el.querySelectorAll(selector);
}

export function appendTo(target) {
    var el = this;
    target.appendChild(el);
    return this;
}

export function replace(target) {
    var el = this;
    var parent = target.parentNode;
    parent.insertBefore(el, target);
    parent.removeChild(target);
    return this;
}

export function center() {
    var el = this;
    var {innerWidth, innerHeight} = window;
    var {width, height} = el.getBoundingClientRect();

    el.style.left = (innerWidth - width) / 2 + 'px';
    el.style.top = (innerHeight - height) / 2 + 'px';

    return this;
}

export var each = [].forEach;

export var requestAnimationFrame = window.requestAnimationFrame ||
                                window.webkitRequestAnimationFrame ||
                                window.msRequestAnimationFrame ||
                                function(fn) {
                                    return setTimeout(fn, 16);
                                };

export var cancelAnimationFrame = window.cancelAnimationFrame ||
                                window.webkitCancelAnimationFrame ||
                                window.msCancelAnimationFrame ||
                                function(id) {
                                    clearTimeout(id);
                                };