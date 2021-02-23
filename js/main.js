let btnDisplayData = document.getElementById('display-data');

let inputName = document.getElementById('form-name');
let inputSurname = document.getElementById('form-surname');
let inputPhone = document.getElementById('form-phone');

let pName = document.getElementById('name');
let pSurname = document.getElementById('surname');
let pPhone = document.getElementById('phone');



btnDisplayData.addEventListener('click', function(){
  let inputName = document.getElementById('form-name').value;
  let inputSurname = document.getElementById('form-surname').value;
  let inputPhone = document.getElementById('form-phone').value;
  
   pName.innerText = inputName;
   pSurname.innerText = inputSurname;
   pPhone.innerText = inputPhone;
   
});
