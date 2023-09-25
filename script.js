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