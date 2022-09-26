document.getElementById("btn-submit").addEventListener("click", function(){
   const emailField = document.getElementById("user-email");
   const email= emailField.value;
   const passwordField = document.getElementById("user-pass");
   const password= passwordField.value;

   if(email=== 'devmern22@gmail.com' && password=== '123456'){
   window.location.href="bank.html"
   }
   else{
    console.log("user unvalid")
   }
   console.log(email, password);
})