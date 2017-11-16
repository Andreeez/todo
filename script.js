console.log("hej");

$(document).ready(function(){
    // Kör denna kod när sidan laddas
//var ourUser = "test"
  //  var ourPassword = "password"
    
    sessionStorage.ourUser = "test"
    sessionStorage.ourPassword = "password"

    
    $(".helloForm").hide();
    $(".forgotForm").hide();
    $(".welcome").show();
    // Klicka på logga in

           
            if (sessionStorage.ourUser !=null) {
               
                // Gör vad som ska göras om vi redan är inloggade.
                } else {
                // visa sidan för en ej inloggad men login funktion tex
                $(".loginbutton").click(function(){
                        
                  if (sessionStorage.ourUser == $(".userEmail").val() && sessionStorage.ourPassword == $(".userPassword").val()) {
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
            }); }

    

});




