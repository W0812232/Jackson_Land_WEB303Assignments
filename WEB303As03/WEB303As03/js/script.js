
// JSON
    function jsonMethod() {
        $.getJSON("team.json", function(data){
            console.log(data);
            $.each(data.members, function(index, obj){
                $("#team").append("<h2>"+obj.name+"</h2>"+"<h5>"+
                obj.position+"</h5>"+"<p>"+obj.bio+"</p>");
            });
    }); 
}

// AJAX
function ajaxMethod(){ 
    $.ajax({
        type: "GET",
        url: "team.json",
        dataType: "JSON", 
        beforeSend: function(){    
            $("#team").append("<h1>LOADING...</h1>");  
        },
        success: function(data){
            setTimeout(function() { //delaying so that the loading message is visible for 3 seconds 
            console.log(data);
            $("#team").empty(); //remove LOADING from content
            $.each(data.members, function(index, obj){
                $("#team").append("<h2>"+obj.name+"</h2>"+"<h5>"+
                obj.position+"</h5>"+"<p>"+obj.bio+"</p>");
            });   
            }, 3000); //3 seconds of delay     
        },
        error: function(data){
            $("#team").empty(); //remove LOADING from content
            $("#team").append("<h1>ERROR: The content could not be retrieved</h1>");
        }
    });
}

//Call method JSON or
$(document).ready(function(){
    ajaxMethod();
});


