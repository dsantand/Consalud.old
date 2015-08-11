
var app = {
    // Application Constructor
    initialize: function() {
        
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //document.addEventListener("backbutton", onBackKeyDown, false);
        document.addEventListener("backbutton", function () { 
            irApaginaConBackBtn();
        }, true); 
        document.addEventListener("offline", onOffline, false);

        app.receivedEvent('deviceready');
        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');

        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        
        
    }
    
};

/*
function onBackKeyDown() {
    //Alert('back');
    window.location = "index.html"; 
}
*/



function onConfirmQuit(button){
    if(button == "1"){
        navigator.app.exitApp(); 
    }
}
function onOffline() {
    Alert('No tiene conexion a internet.\nConecte a 3G o WIFI.');
    //navigator.app.exitApp();
}
