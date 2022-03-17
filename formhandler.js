(function (window) {
    'use strict';

    let App = window.App || {};
    let $ = window.jQuery;

    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided!');
        }
        // find the "selector" in the DOM using jQuery and assign it to this.formElement
        this.$formElement = $(selector);
        if (this.$formElement.length == 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }
    
    App.FormHandler = FormHandler;
    window.App = App;

})(window);