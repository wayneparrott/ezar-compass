
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
    // The scope of 'this' is the event. In order to call the 'doSnapshot'
    // function, we must explicitly call 'app.doSnapshot(...);'
    onDeviceReady: function() {
        app.updateAppLayout();

        ezar.initializeVideoOverlay(
                function() {
                    ezar.getBackCamera().start();

                    //watchHeading() async update randomly stops on ios and android
                    // use getCurrentHeading() as more reliable alternative 
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
                    console.log("Error initializing ezAR: " + error);
                });

        window.addEventListener("resize", function() {
            app.updateAppLayout();
        });
        document.getElementById("snapbtn").addEventListener("click", function() {
            app.doSnapshot();
        });
       
    },
    updateAppLayout: function() {
        document.getElementsByClassName("compass-outer")[0]
                .style.height = window.innerHeight + "px";
    },
    updateHeading: function(hdng) {
        // Set heading value
        document.getElementById("heading-val")
            .innerHTML = hdng;
        // Rotate compass star
        document.getElementById("compass-star")
            .style.webkitTransform = "rotate(" + hdng + "deg)";
    },
    doSnapshot: function() {
        //hide snapbtn so it will not be in snapshot image
        document.getElementById("snapbtn").style.display = "none";
        
        //give dom chance to hide snapbtn before image capture
        setTimeout( function() { 
            ezar.snapshot(  
                function(data) {
                    alert("Snapshot complete.\nSee Gallery for image");
                    document.getElementById("snapbtn").style.display = "block";
                }, 
                function(err) {
                    alert("Error: " + err);
                    document.getElementById("snapbtn").style.display = "block";
                },
                {"saveToPhotoAlbum":true}
            )}, 10);
    } 
};
    
app.initialize();