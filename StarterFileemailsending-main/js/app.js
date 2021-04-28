//variables

const sendBtn = document.getElementById('sendBtn'),
email =document.getElementById('email'),
subject=document.getElementById('subject'),
message=document.getElementById('message'),
resetBtn=document.getElementById('resetBtn'),
sendEmailForm=document.getElementById('email-form');


//Event Listeners

eventListeners()
 //App init
  document.addEventListeners('DOMContentLoaded', appInit);

//Validate the form
email.addEventListeners('blur', validateField);
subject.addEventListeners('blur', validateField);
message.addEventListeners('blur', validateField);

// send email and reset button
sendEmailForm.addEventListener('submit', sendEmail);
resetbtn.addEventListener('click', resetForm);



// Functions

//App Initialization
function appInit(){
//Disable the send Button on load

sendBtn.disabled =true;
}
function sendEmail(e){
e.preventdefault();

// show the spinner
const spinner = document.querySelector('spinner');
spinner.style.display ='block';

// Show the image
const sendEmailImg = document.createElement('img');
sendEmailImg.src ='img/mail.gif';
sendEmailImg.style.display = "block" 



// Hide the spinner then show the send email image
setTimeout(function(){
// // Hide the spinner
spinner.style.display ='none';

// Show the image
document.querySelector('#loaders').appendcild(sendEmailImg);
// After five seconds, hide  the image and reset the form
setTimeout(function(){
sendEmailForm.reset();
sendEmailImg.remove();
}, 5000);
}, 3000);

}
//validate the fields
function validateField(){
    let errors;
   
   //validate the Length of the Fields
   validateLength(this);
   
   // validate the email
   if(this.type==='email'){
      validateEmail(this);
       }
   
   // Both will return errors, then check if they're any errors
   errors = document.queryySelectorAll(' .error')
   
   
   // check  that the inputs are not empty
   if(email.value !== ''  && subject.value !==  '' && message.value !== '') {
    if(errors.length === 0) {
   // the button should be enabled
   sendBtn.disabled =false;
   
   }
   } 
   
   }
   
   //validate the Length of the Fields
   function validateLength(field){
    if(field.value.length >0 ){
   field.style.borderBottonColor ='green';
   field.classList.remove('error');
    }else {
    field.style.borderBottonColor ='red';
   field.classList.add('error');
        }
   }
   
   // validate email (checks for @ in the value)
   
   function validateEmail(field){
   let emailText =field.value;
   //check if the emailText contains the @ sign
   if(emailText.indexOf('0') !== -1){
   field.style.borderBottonColor ='green';
   field.classList.remove('error');
        } else {
    field.style.borderBottonColor ='red';
   field.classList.add('error');
           }
       }
// Reset the form
function resetForm(){
    sendEmailForm.reset();

    }