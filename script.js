const form = document.querySelector("form");
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const address = document.querySelector('#address');
const pincode = document.querySelector('#pincode');
const gender = document.getElementsByName('gender');
const food = document.getElementsByName('checkbox');
const state = document.querySelector('#state');
const country = document.querySelector('#country');

function submitForm(){
    let genderValue = getGenderValue();
    let foodValue = getFoodValue();

    //Sending the data to the table
    const rowData = document.createElement("tr");
    const tableBody = document.querySelector("#table-body");
    rowData.innerHTML = `
      <td>${firstName.value}</td>
      <td>${lastName.value}</td>
      <td>${address.value}</td>
      <td>${pincode.value}</td>
      <td>${genderValue}</td>
      <td>${foodValue}</td>
      <td>${state.value}</td>
      <td>${country.value}</td>
    `;
    tableBody.appendChild(rowData);
    form.reset();
}

// getting food value when submit button clicked
function getFoodValue(){
  let result = [];
  for(let i = 0; i < food.length; i++){
    if(food[i].checked){
      result.push(food[i].value);
    }
  }
  return result;
}

// getting gender value when submit button clicked
function getGenderValue(){
  let genderValue = '';
  for(let i = 0; i < gender.length; i++){
    if(gender[i].checked){
      genderValue = gender[i].value;
    }
  }
  return genderValue;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  let foodValue = getFoodValue();
  if(!form.checkValidity()){
    //Check box validation
    if(foodValue.length < 2){
      const data = document.getElementById('food-Error');
      data.innerHTML = `<p style = "color: red">Please select at least two items</p>`;
    }
    console.log('Validation Error');
    form.classList.add('was-validated')
  }
  //Check box validation
  else if(foodValue.length < 2){
    const data = document.getElementById('food-Error');
    data.innerHTML = `<p style = "color: red">Please select at least two items</p>`;
  }
  else{
    submitForm();
    console.log('Form submitted');
  }
})

// const form = document.querySelector('#create-form');
// const firstName = document.querySelector('#first-name');
// const lastName = document.querySelector('#last-name');
// const address = document.querySelector('#address');
// const pincode = document.querySelector('#pincode');
// const gender = document.querySelector('#gender');
// const state = document.querySelector('#state');
// const country = document.querySelector('#country');

// form.addEventListener('submit', (event) => {
//   validateForm();
//   if(isFormValid() == true){
//     submitForm();
//   }else{
//     event.preventDefault();
//   }
// });

// function submitForm(){
//   const rowData = document.createElement("tr");
//   const tableBody = document.getElementById("table-body");
//   rowData.innerHTML = `<td>${firstName.value}</td><td>${lastName.value}</td><td>${address.value}</td><td>${pincode.value}</td><td>${gender.value}</td><td>${state.value}</td><td>${country.value}</td>`;
//   tableBody.appendChild(rowData);
// }

// function isFormValid(){
//   const inputElements = document.querySelectorAll('.input-group');
//   let result = true;
//   inputElements.forEach((e) => {
//     if(e.classList.contains('error')){
//       result = false;
//     }
//   });
//   return result;
// }

// function validateForm(){
//   //Firstname validation
//   if(firstName.value.trim() == ''){
//     setError(firstName, 'Firstname cannot be empty');
//   }else if(firstName.value.length() < 4){
//     setError(firstName, 'Firstname should be at least 4 character')
//   }else{
//     setSuccess(firstName)
//   }

//   //Lastname
//   if(lastName.value.trim() == ''){
//     setError(lastName, 'Lastname cannot be empty');
//   }else{
//     setSuccess(lastName)
//   }

//   //address
//   if(address.value.trim() == ''){
//     setError(address, 'Address cannot be empty');
//   }else{
//     setSuccess(address);
//   }

//   //pincode
//   if(pincode.value.length() != 6){
//     setError(pincode, 'Pincode should be 6 digit long')
//   }else{
//     setSuccess(pincode);
//   }

//   //gender
//   if(gender.value == ''){
//     setError(gender, 'Please choose your gender');
//   }else{
//     setSuccess(gender);
//   }

//   //state
//   if(state.value.trim() == ''){
//     setError(state, 'State cannot be empty');
//   }else{
//     setSuccess(state);
//   }

//   //Country
//   if(country.value.trim() == ''){
//     setError(country, 'Country cannot be empty');
//   }else{
//     setSuccess(country);
//   }   
// }

// function setError(element, errorMessage){
//   const parent = element.parentElement;
//   if(parent.classList.contains('success')){
//     parent.classList.remove('success');
//   }
//   parent.classList.add('error');
//   const paragraph = parent.querySelector('p');
//   paragraph.textContent = errorMessage;
// }

// function setSuccess(element){
//   const parent = element.parentElement;
//   if(parent.classList.contains('error')){
//     parent.classList.remove('error');
//   }
//   parent.classList.add('success');
// }

// // function submitForm(){
    
    
// //     // const lastname = document.getElementById("last-name");
// //     // const address = document.getElementById("address");
// //     // const pincode = document.getElementById("pincode");
    
// //     const element = document.createElement("tr")
// //     if(document.getElementById("first-name").value != ""){
// //       const data = document.getElementById("table-body");
// //       const firstname = document.getElementById("first-name");
// //       element.innerHTML = `<td>${firstname.value}</td><td>"lastname.value"</td><td>gg</td><td>ggf</td>`;
// //       data.appendChild(element);
// //     }
    
// // }

// // Example starter JavaScript for disabling form submissions if there are invalid fields
// // (function () {
// //     'use strict'
  
// //     // Fetch all the forms we want to apply custom Bootstrap validation styles to
// //     var forms = document.querySelectorAll('.needs-validation')
  
// //     // Loop over them and prevent submission
// //     Array.prototype.slice.call(forms)
// //       .forEach(function (form) {
// //         form.addEventListener('submit', function (event) {
// //           if (!form.checkValidity()) {
// //             event.preventDefault()
// //             event.stopPropagation()
// //           }
  
// //           form.classList.add('was-validated')
// //         })
// //       })
// //   })()