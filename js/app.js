const loader = document.getElementById('loader');



setTimeout(function(){ 
   loader.style.display = 'none';
   
}, 1000);



$(function () {
   
         var error_username = false;
         var error_email = false;
         var error_password = false;
         var error_password2 = false;

    $("#name_error_message").hide();
    $("#sname_error_message").hide();
    $("#email_error_message").hide();
    $("#password_error_message").hide();
    $("#password2_error_message").hide();
    
    $("#username").focusout(function(){
        check_username();
     });
     $("#email").focusout(function(){
        check_email();
     });
     $("#password").focusout(function(){
        check_password();
     });
  
     $("#password2").focusout(function(){
        check_password2();
     });
     $("#exampleFormControlTextarea1").focusout(function(){
        check_message();
     });
   

    function check_username() {
     
        var name = $("#username").val();
        if ( name !== '') {
           $("#username").css("border","2px solid #34F458");
           $("#username_error_message").hide();
          
        } else {
           $("#username_error_message").html("Enter Name please! ");
           $("#username_error_message").show();
           $("#username").css("border","2px solid #F90A0A");
           $("#username_error_message").css('color','#F90A0A');
           error_username = true;

        
        }
     };


     function check_password() {
       var password =  $('#password').val().length;
       if (password > 8) {
           $('#password_error_message').show();
           $('#password_error_message').html('Passwod must be less than 8 characters');
           $('#password').css('border','2px solid #F90A0A');
           $('#password_error_message').css('color','#F90A0A');
           error_password = true;
          
       } else {
        $('#password_error_message').hide();
        $('#password').css('border','2px solid #34F458');
           
       }   
     }


     
    function check_email() {
        var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var email = $('#email').val();

        if (email === '') {
            $('#email_error_message').show();
            $('#email_error_message').html('Email is not Correct');
            $('#email').css('border','2px solid #F90A0A');
            $('#email_error_message').css('color','#F90A0A');
            error_email = true;
           
        } else {
         $('#email_error_message').hide();
    
         $('#email').css('border','2px solid #34F458');
            
        }   
      }



     function check_password2() {
   
         var password =  $('#password').val();
         var password2 = $('#password2').val();

        if (password !== password2 ) {
            $('#password2_error_message').show();
            $('#password2_error_message').html('Passwod did not match');
            $('#password2').css('border','2px solid #F90A0A');
            $('#password2_error_message').css('color','#F90A0A');
            // error_password2 = true;
 
        }
         else {
         $('#password2_error_message').hide();
    
         $('#password2').css('border','2px solid #34F458');
            
        }   

     }
     

    function check_message() {
   
        var message =  $('#exampleFormControlTextarea1').val();
       if (message === '') {
           $('#exampleFormControlTextarea1').css('border','2px solid #F90A0A');
       } 
       else{
        $('#exampleFormControlTextarea1').css('border','2px solid #34F458');
       } 
    }



});

    $("#form").submit(function(e) {
        error_username = false;
        error_email = false;
        error_password = false;
        error_password2 = false;
        error_message = false
     
        check_username();
        check_email();
        check_password();
        check_password2();
        check_message();

        if (error_username === false && error_email === false && error_password === false && error_retype_password === false) {
           alert("Registration Successfull");
           return true;
        } else {
           alert("Please Fill the form Correctly");
           return false;
        }

      
     });



  
  