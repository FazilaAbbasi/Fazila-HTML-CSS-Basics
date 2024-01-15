// // validation code  for Inputs
// var name = document.forms['form']['name'];
// var name = document.forms['form']['email'];
// var name = document.forms['form']['password'];
// var name_error = document.getElementById('name_error');
// var email_error = document.getElementById('email_error');
// var password_error = document.getElementById('password_error');

// name.addEventListener('textInput',name_verify);
// email.addEventListener('textInput',email_verify);
// password.addEventListener('textInput',password_verify);
// function validated(){
//     if (.value.length <9){
//         name.style.border ="1px solid red";
//         name_error.style.display = block;
//         name.focus();
//         return false;

//     }
//     if (email.value.length <9){
//         email.style.border ="1px solid red";
//         email_error.style.display = block;
//         email.focus();
//         return false;

//     }
//     if (password.value.length <8){
//         password.style.border ="1px solid red";
//         password_error.style.display = block;
//         password.focus();
//         return false;

//     }

// }
// function email_verify(){
//     if (email.value.length >= 8){
//         email.style.border ="1px solid silver";
//         email_error.style.display = none;
//         return true;
//     }
// }