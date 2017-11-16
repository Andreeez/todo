console.log("hej");

$(document).ready(function(){
    // Kör denna kod när sidan laddas
    var ourUser = "test"
    var ourPassword = "password"
    
    $(".helloForm").hide();
    $(".forgotForm").hide();
    $(".welcome").show();
    // Klicka på logga in
    $(".loginbutton").click(function(){
        
        if (ourUser == $(".userEmail").val() && ourPassword == $(".userPassword").val()) {
                console.log("user mail is ok");
                // Dölj inlogg Visa hello
                $(".hejString").append(" hej " + $(".userEmail").val() );
                $(".loginForm").hide();
                $(".welcome").hide();
                $(".helloForm").show();
                $(".loginbutton").hide();
                $(".logoutbutton").show();
                $(".userEmail").hide();
                $(".userPassword").hide();
            } else {
                console.log("fel ifyllt")
                // Dölj inlogg visa forgotPass
                
                $(".loginForm").hide();
                $(".welcome").hide();
                $(".forgotForm").show();
            }
    });

});