let btnDisplayData = document.getElementById('display-data');

let inputName = document.getElementById('form-name');
let inputSurname = document.getElementById('form-surname');
let inputPhone = document.getElementById('form-phone');

let pName = document.getElementById('name');
let pSurname = document.getElementById('surname');
let pPhone = document.getElementById('phone');



btnDisplayData.addEventListener('click', function(){
   
   pName.innerText = inputName.value;
   pSurname.innerText = inputSurname.value;
   pPhone.innerText = inputPhone.value;
   

});
