(function (window) {
    'use strict';

    const FORM_SELECTOR = '[data-coffee-order="form"]';
    const CHECKLIST_SELECTOR = '[data-coffee-order="checkList"]';
    const SERVER_URL = 'https://saturn.rochesterschools.org:8000/json';

    // let's make sure we only have one of each of these:
    let App = window.App;
    let Truck = App.Truck;
    let DataStore = App.DataStore;
    let RemoteDataStore = App.RemoteDataStore;
    let FormHandler = App.FormHandler;
    let CheckList = App.CheckList;
    let Validation = App.Validation;

    // the remote database where we store orders
    let remoteDS = new RemoteDataStore(SERVER_URL);

    let myTruck = new Truck('12345', remoteDS);
    let checkList = new CheckList(CHECKLIST_SELECTOR);

    window.myTruck = myTruck;

    //when the checklist is clicked, call "deliverOrder" on myTruck
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));

    // find the form that is being submitted and create a formHandler object
    let formHandler = new FormHandler(FORM_SELECTOR);
    
    // When the submit button is called, create the order and add a chackbox
    formHandler.addSubmitHandler(function (data) {
        myTruck.createOrder.call(myTruck, data);
        checkList.addRow.call(checkList, data);
    });

    // add the email validator to the email input field
    formHandler.addInputHandler(Validation.isCompanyEmail);

})(window);