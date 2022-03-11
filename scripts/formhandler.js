(function (window) {
'use strict';

let App = window.App || {};
let $ = window.jQuery;

function FormHandler(selector) {
    //do
    if (!selector) {
        throw new Error('No selector provided!');
    }


//find the "selector" and assign to this.formElement
this.$formElement = $(selector);
if (this.$formElement.length == 0) {
    throw new Error('Could not find element with selector: ' + selector);
}
}

FormHandler.prototype.addSubmitHandler = function (func) {
    console.log('Setting the submit handler for the form...');
    this.$formElement.on('submit', function(event) {
        event.preventDefault();

        let data = {};
        $(this).serializeArray().forEach(function (item) {
            data[item.name] = item.value;
            console.log(item.name + ' is ' + item.value);
        });
        console.log(data);
        func(data); //call function passed down in data from form
    });
}

App.FormHandler = FormHandler;
window.App = App;

})(window);