/**
 * KeeWeb plugin: font-change
 * @author bei2
 * @license MIT
 */

const FrameworkView = require('framework/views/view');
const frameworkViewRender = FrameworkView.prototype.render;
FrameworkView.prototype.render = function () {
    frameworkViewRender.apply(this);
    return this;
};

function changeFont(font) {
    FrameworkView.prototype.render = function () {
        frameworkViewRender.apply(this);
        this.$el.find('.app').style["font-family"] = font;
        return this;
    };
}

module.exports.getSettings = function () {
    return [
        {
            name: 'font',
            label: 'Font',
            type: 'text',
            maxlength: 200,
            placeholder: 'fonts',
            value: ''
        }
    ];
};

module.exports.setSettings = function (changes) {
    if(!changes["font"]) {
        return;
    }

    changeFont(changes["font"]);
};

module.exports.uninstall = function() {
    FrameworkView.prototype.render = frameworkViewRender;
};
