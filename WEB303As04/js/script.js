/*
    Assignment #4
    {Jackson Land}
*/

$(function(){
    if(!navigator.geolocation){
        $("#locationhere").html("<h1> Please enable your location </h1>")
    } else {
        navigator.geolocation.getCurrentPosition(success, fail);

        // get the coordinates
        function success(pos){
    
            let lat1 = pos.coords.latitude;
            let lon1 = pos.coords.longitude;

            if(localStorage.getItem("Latitude") !==null) {
                $("#locationhere").html("<p> Your Latitude is:" + lat1 +"</p>");
                $("#locationhere").append("<p> Your Longitude is:" + lon1 +"</p>");

                lat2 =localStorage.getItem("Latitude");
                lon2 =localStorage.getItem("Longitude");
                $("#locationhere").append("<p>Previous Latitude was:" + lat2 +"</p>");
                $("#locationhere").append("<p>Previous Longitude was:" + lon2 +"</p>");

                $("#locationhere").append("<h1>Welcome Back to the website</h1>");
                $("#locationhere").append("<p>You have travelled "+calcDistanceBetweenPoints(lat1, lon1, lat2, lon2)+"m since you last vistied this page</p>");
            } else {
                $("#locationhere").html("<p> Your Latitude is:" + lat1 +"</p>");
                $("#locationhere").append("<p> Your Longitude is:" + lon1 +"</p>");
                $("#locationhere").append("<h1>Welcome it is your first time here</h1>");
            }
            
            localStorage.setItem("Latitude", lat1);
            localStorage.setItem("Longitude", lon1);
        }
        function fail(){
            $("#locationhere").append("<h1>ERROR: Please allow geolocation for the application to run</h1>")
        }
    }
    





    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


