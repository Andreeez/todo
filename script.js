console.log("hej");

$(document).ready(function(){
    var ourUser = "test"; 
    var ourPassword = "password";
    
    $(".logoutbutton").hide();
    $(".forgotForm").hide();
    
    if(sessionStorage.userName !=null){
        $(".welcome").hide();
        $(".hello").text(sessionStorage.userName);
        $(".loginbutton").hide();
        $("input, label").hide();
        $(".logoutbutton").show();
        $(".forgotForm").hide();
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

            } else {
                
                $(".inloggform").show();
                //$(".loginbutton").show();
            }

        });
    }
        $(".logoutbutton").click(function(){
            sessionStorage.clear()
            location.reload();
        
        });

});


   /** $(document).ready(function(){
        var ourUser = "test"
        var ourPassword = "password"

            if (sessionStorage.ourUser !=null) {
               
                // Gör vad som ska göras om vi redan är inloggade.
                } else {
                    
                        // Kör denna kod när sidan laddas

                        
                // visa sidan för en ej inloggad men login funktion tex
                $(".loginbutton").click(function(){
                    sessionStorage.ourUser = "test"
                    sessionStorage.ourPassword = "password"
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

}); */

