
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        this.updateHeading(0);
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
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.updateAppLayout();

        ezar.initialize(
                function() {
                    ezar.getBackCamera().start();

                    setInterval(function() {
                        navigator.compass.getCurrentHeading(
                            function(heading) { 
                                var hdng = Math.floor(heading.magneticHeading);
                                app.updateHeading(hdng);
                            }, 
                            function(err) {
                                console.log("Compass error", err);
                            });
                    }, 500);
 
                },
                function(error) {
                    console.log("Error initializing EasyAR: " + error);
                });

        window.addEventListener("resize", function() {
            app.updateAppLayout();
        });
    },
    updateAppLayout: function() {
        document.getElementsByClassName("compass-outer")[0]
                .style.height = window.innerHeight + "px";
    },
    updateHeading: function(hdng) {
        // Set heading value
        document.getElementById("heading")
            .innerHTML = hdng;
        // Rotate compass star
        document.getElementById("compass-star")
            .style.webkitTransform = "rotate(" + hdng + "deg)";
    }
};

app.initialize();