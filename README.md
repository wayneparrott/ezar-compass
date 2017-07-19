# ezar-compass
Augmented reality compass using ezAR plugins for Cordova

![](http://static1.squarespace.com/static/54d524d4e4b0f489aba79ed2/55310535e4b03253914c8657/55310564e4b086967b6ed7fb/1429276278307/ezar-compass.png)
##Getting Started
While ezAR works with Cordova-based SDKs such as Ionic, this example uses Cordova CLI examples are provided below. 
Install or update your [Apache Cordova sdk](https://cordova.apache.org/)


*Note: the project will automatically install its required plugins including the ezAR
plugins from the npm public repository.*

step-0.  Add your target platform(s) to the project

        cordova platform add ios
    
or

        cordova platform add android


step-1.  Build and install on device

*Note: because of the ezAR camera requirement the app will only perform correctly 
when installed on a real mobile device.*

##Use Alternative WebView
The ezAR VideoOverlay plugin supports both standard and the alternative
Crosswalk WebView for Android and WKWebView for iOS. To enable one of these
alternative webviews comment the specific plugin entries in the config.xml file.

##ezAR Docs and Tech Support
See [ezartech.com](http://ezartech.com) for documentation and support.


Copyright (c) 2015-2017, ezAR Technologies