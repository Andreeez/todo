console.log("hej");
console.log("Tjabba");
console.log("yo");

$(document).ready(function(){
    var ourUser = "test"; 
    var ourPassword = "password";
    
    var stuffToDo = [
        "Klipp gräset",
        "Betala räkningar",
        "Köp mjölk",
        "Spika tavlor"
    ];
    
    var json_str = JSON.stringify(stuffToDo);
    //localStorage.doList = json_str;
    localStorage.stuffToDo = json_str;
    //var loopArray = JSON.parse(localStorage.doList);
    var loopArray = JSON.parse(localStorage.stuffToDo);
    $(".logoutbutton").hide();
    $(".forgotForm").hide();
    $(".addToStuffList").hide();
    
    function addStuffToDo(){
        stuffToDo.push()
    }

    if(sessionStorage.userName !=null){
        $(".welcome").hide();
        $(".hello").text(sessionStorage.userName);
        $(".loginbutton").hide();
        $("input, label").hide();
        $(".logoutbutton").show();
        $(".forgotForm").hide();
        $(".addStuff").show();
        $(".addToStuffButton").show();
        

        $("#main").append("<ul class='stuffList'></ul>");
        
                loopArray.forEach(function(index) {
                    $(".stuffList").append("<li>" + index + "</li>");
                            
                });
              
    } else {

        $(".loginbutton").click(function(){
            if (ourUser == $(".userEmail").val() && ourPassword == $(".userPassword").val()) {
                sessionStorage.userName = "Anders Hagelkvist";
                $(".welcome").hide();
                $(".hello").text(sessionStorage.userName);
                $(".loginbutton").hide();
                $("input, label").hide();
                $(".logoutbutton").show();
                $(".forgotForm").hide();
                $(".addStuff").show();
                $(".addToStuffButton").show();
                $("#main").append("<ul class='stuffList'></ul>");

                loopArray.forEach(function(index) {
                    $(".stuffList").append("<li>" + index + "</li>");
                    
                });
               
            } else {
                
                $(".inloggform").show();
                
               
            }

        });
    }
        $(".logoutbutton").click(function(){
            sessionStorage.clear()
            location.reload();
        
        });

});
