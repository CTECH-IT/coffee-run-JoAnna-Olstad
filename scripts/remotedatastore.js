(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;
    function RemoteDataStore(url) {
        if (!url) {
            throw new Error('No remote URL supplied.');
        }
        this.serverURL = url;
    }

    RemoteDataStore.prototype.add = function (key, val) {
        // Call jQuery's $.post method to send the value to the serverURL
        $.post(this.serverURL, val, function (serverResponse) {
            console.log(serverResponse);
    });
};

App.RemoteDataStore = RemoteDataStore;
window.App = App;
}) (window);